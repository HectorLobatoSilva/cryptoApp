import { Avatar, Card, Col, Grid, Row, Spacer, Text } from '@nextui-org/react';

import { BsShieldFillCheck, BsSearch, BsHeartFill } from 'react-icons/bs';
import React from 'react';

const Services = () => {
    return (
        <Grid.Container gap={3}>
            <Grid sm md>
                <Text h1 weight="bold">
                    Services that we <br />
                    Continue to improve
                </Text>
            </Grid>
            <Grid sm direction="column">
                <Card css={{ background: '$glass' }}>
                    <Row>
                        <Col span={1.5}>
                            <Avatar
                                color="primary"
                                icon={<BsShieldFillCheck />}
                            />
                        </Col>
                        <Col span={10.5}>
                            <Text weight="bold">Securiry Garanteed</Text>
                            <Text>
                                Securiry is guaranteed. We always maintain
                                privacy and mainting the cuality of our
                                products.
                            </Text>
                        </Col>
                    </Row>
                </Card>
                <Spacer />
                <Card css={{ background: '$glass' }}>
                    <Row>
                        <Col span={1.5}>
                            <Avatar color="secondary" icon={<BsSearch />} />
                        </Col>
                        <Col span={10.5}>
                            <Text weight="bold">Best Exchange rates</Text>
                            <Text>
                                Securiry is guaranteed. We always maintain
                                privacy and mainting the cuality of our
                                products.
                            </Text>
                        </Col>
                    </Row>
                </Card>
                <Spacer />
                <Card css={{ background: '$glass' }}>
                    <Row>
                        <Col span={1.5}>
                            <Avatar color="success" icon={<BsHeartFill />} />
                        </Col>
                        <Col span={10.5}>
                            <Text weight="bold">Fastest Transactions</Text>
                            <Text>
                                Securiry is guaranteed. We always maintain
                                privacy and mainting the cuality of our
                                products.
                            </Text>
                        </Col>
                    </Row>
                </Card>
            </Grid>
        </Grid.Container>
    );
};

export default Services;
