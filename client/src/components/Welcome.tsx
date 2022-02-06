import React, { useState, useContext, FormEvent } from 'react';
import {
    Avatar,
    Button,
    Card,
    Col,
    Container,
    Grid,
    Input,
    Loading,
    Row,
    Spacer,
    Text,
    Textarea,
} from '@nextui-org/react';
import { SiHiveBlockchain } from 'react-icons/si';
import { TransactionContext } from '../context/Transaction.context';
import { shortAddress } from '../utils/constants';

const Welcome = () => {
    const {
        connectWallet,
        currentAccount,
        formData,
        updateFormData,
        sendTransaction,
        isSendTransaction,
    } = useContext(TransactionContext);

    const [isConnecting, setIsConnecting] = useState<Boolean>(false);

    const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const { address, amount, keyword, message } = formData || {};
        if (!address || !amount || !keyword || !message) return;
        sendTransaction();
    };

    const handleConnect = async () => {
        try {
            setIsConnecting(true);
            await connectWallet();
        } catch (error) {
        } finally {
            setIsConnecting(false);
        }
    };

    return (
        <Grid.Container gap={2}>
            <Grid sm md direction="column">
                <Text h1>
                    Send Crypto <br /> Accross the world
                </Text>
                <Text>
                    Explore the crypto world. Transfer your Ethereum easily on
                    Crypto App.
                </Text>
                <Spacer></Spacer>
                {!currentAccount && (
                    <Button
                        css={{ backgroundColor: '$button', width: '100%' }}
                        onClick={handleConnect}
                    >
                        {isConnecting ? (
                            <Loading type="points" color="white" size="sm" />
                        ) : (
                            'Connect Wallet'
                        )}
                    </Button>
                )}
                <Spacer />
                <Row>
                    <Card css={{ backgroundColor: '$glass' }} hoverable shadow>
                        <Text css={{ textAlign: 'center' }}>Reliability</Text>
                    </Card>
                    <Spacer />
                    <Card css={{ backgroundColor: '$glass' }} hoverable shadow>
                        <Text css={{ textAlign: 'center' }}>Security</Text>
                    </Card>
                    <Spacer />
                    <Card css={{ backgroundColor: '$glass' }} hoverable shadow>
                        <Text css={{ textAlign: 'center' }}>Ethereum</Text>
                    </Card>
                </Row>
                <Spacer />
                <Row>
                    <Card css={{ backgroundColor: '$glass' }} hoverable shadow>
                        <Text css={{ textAlign: 'center' }}> Web 3.0 </Text>
                    </Card>
                    <Spacer />
                    <Card css={{ backgroundColor: '$glass' }} hoverable shadow>
                        <Text css={{ textAlign: 'center' }}>Low fees</Text>
                    </Card>
                    <Spacer />
                    <Card css={{ backgroundColor: '$glass' }} hoverable shadow>
                        <Text css={{ textAlign: 'center' }}>Blockchain</Text>
                    </Card>
                </Row>
            </Grid>

            <Grid xs direction="column">
                <Card color="gradient">
                    <Card.Header>
                        <Col>
                            <Text>Address</Text>
                            {currentAccount && (
                                <Text weight="bold">
                                    {shortAddress(currentAccount)}
                                </Text>
                            )}
                        </Col>
                    </Card.Header>
                    <Card.Footer>
                        <Row>
                            <Col>
                                <Text weight="bold" size={25}>
                                    Ethereum
                                </Text>
                            </Col>
                            <Col>
                                <Row justify="flex-end">
                                    <Avatar
                                        icon={
                                            <SiHiveBlockchain
                                                color="white"
                                                size={15}
                                            />
                                        }
                                    />
                                </Row>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
                <Spacer />
                <Container
                    css={{ backgroundColor: '$form', borderRadius: '$lg' }}
                >
                    <Spacer />
                    <form action="">
                        <Input
                            placeholder="Address To"
                            name="address"
                            type="text"
                            clearable
                            value={formData?.address}
                            onChange={updateFormData}
                            css={{ width: '100%', background: 'red' }}
                        />
                        <Spacer y={0.5} />
                        <Input
                            placeholder="Amount (ETH)"
                            name="amount"
                            type="number"
                            step="0.0001"
                            min="0"
                            value={formData?.amount.toString()}
                            onChange={updateFormData}
                            css={{ width: '100%', background: 'red' }}
                        />
                        <Spacer y={0.5} />
                        <Input
                            placeholder="Keyword(Gif name)"
                            name="keyword"
                            type="text"
                            value={formData?.keyword}
                            onChange={updateFormData}
                            css={{ width: '100%', background: 'red' }}
                        />
                        <Spacer y={0.5} />
                        <Textarea
                            placeholder="Message"
                            name="message"
                            value={formData?.message}
                            onChange={updateFormData}
                            css={{ width: '100%', background: 'red' }}
                        />
                        <Spacer y={0.5} />
                        <Button
                            disabled={!!isSendTransaction}
                            onClick={handleSubmit}
                            css={{
                                width: '100%',
                                backgroundColor: '$button',
                            }}
                        >
                            {isSendTransaction ? (
                                <Loading
                                    type="points"
                                    color="white"
                                    size="sm"
                                />
                            ) : (
                                'Send now'
                            )}
                        </Button>
                        <Spacer />
                    </form>
                </Container>
            </Grid>
        </Grid.Container>
    );
};

export default Welcome;
