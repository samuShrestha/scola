// === IMPORTS ===
// REACT REDUX
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

// GOOGLE MATERIAL-UI
import { MuiThemeProvider } from 'material-ui/styles';
import injectTapEventPlugin from 'react-tap-event-plugin';

// CONTAINERS / STORE / CSS
import App from './containers/App';
import store, { history } from './store';
import './index.css';

// MATERIAL - UI THEMEING
import MuiTheme from './MuiTheme';
// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider theme={MuiTheme}>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);