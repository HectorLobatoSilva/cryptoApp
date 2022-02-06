import React, { createContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { Constants } from '../utils/constants';
import { Context, Form, TransactionSender } from '../interfaces';
import { FormElement } from '@nextui-org/react';

export const TransactionContext = createContext<Context>({
    transactionsCount: 0,
    connectWallet: () => {},
    updateFormData: (event: React.ChangeEvent<FormElement>) => {},
    sendTransaction: () => {},
    isSendTransaction: false,
});

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(
        Constants.CONTRACT_ADDRESS as string,
        Constants.CONTRACT_ABI,
        signer,
    );
    return transactionContract;
};

export const TransactionProvider = ({ children }: any) => {
    const formInitState: Form = {
        address: '',
        amount: 0,
        keyword: '',
        message: '',
    };
    const [currentAccount, setCurrentAccount] = useState<string>('');
    const [formData, setFormData] = useState<Form>(formInitState);
    const [isSendTransaction, setIsSendTransaction] = useState<Boolean>(false);
    const [transactionsCount, setTransactionsCount] = useState<number>(
        Number(localStorage.getItem('transaction_count')),
    );
    const [transactions, setTransactions] = useState<Array<TransactionSender>>(
        [],
    );

    const getAllTransactions = async () => {
        try {
            if (!ethereum) return alert('Please install any wallet');
            const transactionContract = getEthereumContract();
            const availableTransactions =
                await transactionContract.getAllTransactions();
            const structuredTransactions: Array<TransactionSender> =
                availableTransactions.map((transaction: any) => ({
                    message: transaction.message,
                    timestamp: new Date(
                        transaction.timestamp.toNumber() * 1000,
                    ).toLocaleString(),
                    addressFrom: transaction.sender,
                    amount: parseInt(transaction.amount._hex) / 10 ** 18,
                    addressTo: transaction.receiver,
                    keyword: transaction.keyword,
                }));
            structuredTransactions.reverse();
            setTransactions(structuredTransactions);
        } catch (error) {}
    };

    const isWalletConected = async () => {
        try {
            if (!ethereum) return alert('Please install metamask');
            const accounts = await ethereum.request({ method: 'eth_accounts' });
            if (accounts.length) {
                setCurrentAccount(accounts[0]);
                getAllTransactions();
            } else {
                console.log('No acounts allow');
            }
        } catch (error) {
            console.log('No eth object');
        }
    };

    const checkIfTransactionExist = async () => {
        try {
            const transactionContract = getEthereumContract();
            const transactionCount =
                await transactionContract.getTransactionCount();
            window.localStorage.setItem('transactioncount', transactionCount);
        } catch (error) {
            console.warn(error);
        }
    };

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert('Please install metamask');
            const accounts = await ethereum.request({
                method: 'eth_requestAccounts',
            });
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);
            throw new Error('No eth object');
        }
    };

    const updateFormData = (event: React.ChangeEvent<FormElement>) => {
        setFormData((prevState: any) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };

    const sendTransaction = async () => {
        try {
            if (!ethereum) return alert('Please install metamask');
            // get the data from the form
            const { address, amount, keyword, message } = formData;
            const transactionContract = getEthereumContract();
            const parseAmount = ethers.utils.parseEther(amount.toString());
            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [
                    {
                        from: currentAccount,
                        to: address,
                        gas: '0x5208', // hex 0.000021 eth -> 21000 GWEI
                        value: parseAmount._hex, //
                    },
                ],
            });

            const transactionHash = await transactionContract.addToBlockchain(
                address,
                parseAmount,
                message,
                keyword,
            );
            setIsSendTransaction(true);
            await transactionHash.wait();
            setIsSendTransaction(false);

            const transactionCount =
                await transactionContract.getTransactionCount();
            setTransactionsCount(transactionCount.toNumber());
            setFormData(formInitState);
            getAllTransactions();
        } catch (error) {}
    };

    useEffect(() => {
        isWalletConected();
        checkIfTransactionExist();
    }, []);

    return (
        <TransactionContext.Provider
            value={{
                connectWallet,
                currentAccount,
                formData,
                updateFormData,
                sendTransaction,
                isSendTransaction,
                transactionsCount,
                checkIfTransactionExist,
                transactions,
            }}
        >
            {children}
        </TransactionContext.Provider>
    );
};
