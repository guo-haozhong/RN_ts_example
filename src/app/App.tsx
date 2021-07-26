import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../redux';

import App from '../router';

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}