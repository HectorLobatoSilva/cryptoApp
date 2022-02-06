import { createTheme, NextUIProvider, Text } from '@nextui-org/react';

export const Theme = createTheme({
    type: 'dark',
    theme: {
        colors: {
            form: 'rgba(15, 7, 102,0.53)',
            input: 'rgba(81,74,152,0.69)',
            button: 'rgba(213,238,254, 0.35)',
            gradient:
                'radial-gradient(circle, rgba(105,125,181,0.75) 0%, rgba(22,37,169,0.49) 56%, rgba(65,81,217,0.32) 100%)',
            glass: 'rgba(255,255,255,0.24)',
            transactionBg: 'rgb(15,7,102)',
            background:
                'linear-gradient(180deg, rgba(15,7,102,1) 0%, rgba(89,5,123,1) 25%, rgba(171,14,134,1) 75%, rgba(240,240,97,1) 100%)',
        },
        fonts: {},
    },
});
