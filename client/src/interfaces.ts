import { FormElement } from '@nextui-org/react';

declare global {
    interface Window {
        ethereum?: any;
    }
}

// current account: string;

export interface Form {
    address: string;
    amount: number;
    keyword: string;
    message: string;
}

export interface Transaction {
    keyword: string;
    message: string;
    receiver: string;
    sender: string;
    timestamp: string;
}

export interface TransactionSender {
    message: string;
    timestamp: string;
    addressFrom: string;
    amount: number;
    addressTo: string;
    keyword: string;
}

export interface Context {
    connectWallet: Function;
    currentAccount?: string;
    formData?: Form;
    updateFormData: (event: React.ChangeEvent<FormElement>) => void;
    sendTransaction: Function;
    isSendTransaction: Boolean;
    transactionsCount: number;
    checkIfTransactionExist?: () => Promise<any>;
    transactions?: Array<TransactionSender>;
}
