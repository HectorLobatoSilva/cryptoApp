import { Grid, Spacer, Text } from '@nextui-org/react';
import React from 'react';
const Footer = () => {
    return (
        <Grid.Container>
            <Grid
                css={{
                    width: '100%',
                    padding: '$15 0',
                    textAlign: 'center',
                }}
            >
                <Text> Come to join </Text>
                <Text weight="bold">team@cryptoapp.com</Text>
                <Spacer y={1} />
                <div style={{ borderBottom: '2px solid white' }}></div>
            </Grid>
        </Grid.Container>
    );
};

export default Footer;
