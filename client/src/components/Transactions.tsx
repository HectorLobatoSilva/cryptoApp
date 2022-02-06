import React, { useContext } from 'react';
import { Card, Col, Grid, Link, Text } from '@nextui-org/react';
import { TransactionContext } from '../context/Transaction.context';
import { TransactionSender } from '../interfaces';
import { shortAddress } from '../utils/constants';
import useGifphy from './../hooks/useGifphy';

const TransactionCard = (props: TransactionSender) => {
    const { addressTo, addressFrom, timestamp, message, keyword, amount } =
        props;
    const giftUrl: string = useGifphy({ keyword });
    return (
        <Grid xs={12} md={4}>
            <Card cover>
                <Card.Header
                    css={{
                        position: 'absolute',
                        zIndex: 1,
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        alignItems: 'flex-start',
                    }}
                >
                    <Col>
                        <Text>
                            From:{' '}
                            <Link
                                href={`https://ropsten.etherscan.io/address/${addressFrom}`}
                                target="_blank"
                                css={{ color: '$white', fontWeight: '$bold' }}
                            >
                                {addressFrom && shortAddress(addressFrom)}
                            </Link>
                        </Text>
                        <Text>
                            To:{' '}
                            <Link
                                href={`https://ropsten.etherscan.io/address/${addressTo}`}
                                target="_blank"
                                css={{ color: '$white', fontWeight: '$bold' }}
                            >
                                {addressTo && shortAddress(addressTo)}
                            </Link>
                        </Text>
                        <Text>
                            Amount: <strong>{amount} ETH</strong>
                        </Text>
                        <Text>
                            Message: <strong>{message}</strong>
                        </Text>
                    </Col>
                </Card.Header>
                <Card.Body>
                    <Card.Image
                        src={giftUrl}
                        height={340}
                        width="100%"
                        alt="Card image background"
                    />
                </Card.Body>
                <Card.Footer
                    css={{
                        position: 'absolute',
                        bottom: 0,
                        zIndex: 1,
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        css={{
                            padding: '$5',
                            borderRadius: '50px',
                            background: '$yellow500',
                        }}
                    >
                        {timestamp}
                    </Text>
                </Card.Footer>
            </Card>
        </Grid>
    );
};

const Transactions = () => {
    const { currentAccount, transactions } = useContext(TransactionContext);
    return (
        <>
            <Grid.Container direction="column">
                <Grid xs justify="center" alignItems="center">
                    <Text h1 weight="bold">
                        {currentAccount
                            ? 'Lastest Transactions'
                            : 'Connect your account to see the lastest transactions'}
                    </Text>
                </Grid>
            </Grid.Container>
            <Grid.Container gap={2}>
                {transactions?.map((transaction: TransactionSender) => (
                    <TransactionCard
                        key={transaction.addressFrom + transaction.timestamp}
                        {...transaction}
                    />
                ))}
            </Grid.Container>
        </>
    );
};

export default Transactions;
