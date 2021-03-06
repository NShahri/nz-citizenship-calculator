import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import appReducer from './reducers';

//
// Setup handler of all unhandled exceptions
//
import setupGlobalExceptionHandler from './libs/globalExceptionLogger';
setupGlobalExceptionHandler(window);
//
//

/* eslint-disable no-underscore-dangle */
let store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
