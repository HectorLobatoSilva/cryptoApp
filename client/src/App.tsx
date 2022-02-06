import React from 'react';

import { Container, useTheme } from '@nextui-org/react';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Transactions from './components/Transactions';
import Welcome from './components/Welcome';

const App = () => {
    const { theme } = useTheme();
    return (
        <Container
            xl
            responsive
            css={{
                background: theme?.colors.background.value,
            }}
        >
            <Container md>
                <Navbar />
                <Welcome />
                <Services />
                <Transactions />
                <Navbar />
                <Footer />
            </Container>
        </Container>
    );
};

export default App;
