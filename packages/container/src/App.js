import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import MarketingApp from './components/Marketing';
import Header from "./components/Header";

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                    <div>
                        <Header />
                        <MarketingApp />
                    </div>
            </StylesProvider>
        </BrowserRouter>
    );
} 