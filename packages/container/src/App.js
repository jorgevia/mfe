import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/Marketing';
import Header from "./components/Header";

export default () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <MarketingApp />
            </div>
        </BrowserRouter>
    );
} 