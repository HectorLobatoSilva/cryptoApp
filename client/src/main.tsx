import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TransactionProvider } from './context/Transaction.context';
import { Theme } from './Theme';
ReactDOM.render(
    <NextUIProvider theme={Theme}>
        <TransactionProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </TransactionProvider>
    </NextUIProvider>,
    document.getElementById('root'),
);
