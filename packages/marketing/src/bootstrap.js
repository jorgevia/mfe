import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from "./App";

export const mount = (el) => {
    ReactDOM.render(<App />, el);
}