import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class ProductDetail extends Component {
    static navigationOptions = {
        title: 'Product Detail'
    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text>{this.props.navigation.state.params.title}</Text>
            </View>
        )
    }
}