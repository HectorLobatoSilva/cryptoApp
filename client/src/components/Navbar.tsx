import React from 'react';
import { Container, Grid, Text } from '@nextui-org/react';

import { SiBlockchaindotcom } from 'react-icons/si';

const Navbar = () => {
    return (
        <Grid.Container gap={2} alignItems="center">
            <Grid xs justify="center" direction="column" alignItems="center">
                <SiBlockchaindotcom color="#FFF" fontSize={34} />
                <p>Cripto App</p>
            </Grid>
            <Grid
                md
                direction="column"
                css={{
                    backgroundColor: '$warning',
                    borderRadius: '$md',
                    minHeight: '$20',
                }}
            >
                <Text size={15} color="white" weight="bold">
                    Important Disclaimer
                </Text>
                <Text size={15} color="white" css={{ margin: 0 }}>
                    This is a test app, never have to be used for a financial
                    porpuses, I have to thanks to{' '}
                    <strong>JavaScript Mastery </strong> for the tutorial.
                </Text>
            </Grid>
        </Grid.Container>
    );
};

export default Navbar;
