import React, { Component } from 'react';
import {
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        borderRadius: 5,
        overflow: 'hidden',
        borderColor: 'grey',
        backgroundColor: 'white',
        borderWidth: 1,
        elevation: 1,
    },
    thumbnail: {
        // flex: 1,
        width: 300,
        height: 300,
        resizeMode: 'contain'
    },
    text: {
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    noMoreCards: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

let Cards = [
    { text: 'Billy Bass', uri: 'http://kswildlife.org/ww/wp-content/uploads/2014/08/Spotted_Bass.jpg' },
    { text: 'Tammy Trout', uri: 'http://martykimsey.com/website/agent_pictures/5237/Rainbow-Trout.jpg' },
    { text: 'Sally Sturgeon', uri: 'http://www.montanaoutdoor.com/wp-content/uploads/2016/05/noaa.jpg' },
]

class Card extends Component {
    render() {
        return (
            <View style={styles.card}>
                <Image style={styles.thumbnail} source={{ uri: this.props.uri }} resizeMode={Image.resizeMode.contain} />
                <Text style={styles.text}>{this.props.text}</Text>
            </View>
        )
    }
}

class NoMoreCards extends Component {
    render() {
        return (
            <View style={styles.noMoreCards}>
                <Text>No more fish in your area...</Text>
            </View>
        )
    }
}

export default class Fish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: Cards,
            outOfCards: false
        };
    }
    handleYes(card) {
        console.log('Yes');
    }
    handleNo(card) {
        console.log('No');
    }
    cardRemoved(index) {
        console.log(`The index is ${index}`);

        const CARD_REFRESH_LIMIT = 3;

        if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
            console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);

            if (!this.state.outOfCards) {
                this.setState({
                    cards: this.state.cards,
                    outOfCards: true
                })
            }

        }

    }
    render() {
        return (
            <View style={{flex: 1}}>
                <SwipeCards
                    cards={this.state.cards}
                    loop={false}

                    renderCard={(cardData) => <Card {...cardData} />}
                    renderNoMoreCards={() => <NoMoreCards />}
                    showYup={true}
                    showNope={true}

                    handleYup={this.handleYes.bind(this)}
                    handleNope={this.handleNo.bind(this)}
                    cardRemoved={this.cardRemoved.bind(this)}
                    />
            </View>
        );
    }
}