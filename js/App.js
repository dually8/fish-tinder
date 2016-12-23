import React, { Component } from 'react';
import Fish from './components/fish-tinder';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fish />
        )
    }
}