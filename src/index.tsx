import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { App } from './components';
import { ThemeProvider } from './contexts/theme';
import { MessageProvider } from './contexts/messages';
import './index.scss';

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ThemeProvider>
            <MessageProvider>
                <App />
            </MessageProvider>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
serviceWorker.unregister();
