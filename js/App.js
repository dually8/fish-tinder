import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity} from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


import * as reducers from './reducers';
import Fish from './components/fish-tinder';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View
                style={{ flex: 1}}
            >
                <Provider store={store}>
                    <Fish />
                </Provider>
            </View>            
        )
    }
}