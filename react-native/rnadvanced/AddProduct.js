import React, { Component } from 'react';
import {
    Text,
    View,
    Picker,
    TextInput,
    Button,
    Alert
} from 'react-native';

export default class AddProduct extends Component {
    static navigationOptions = {
        title: 'Add Product'
    };
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            price: '',
            categories: ['mobile', 'native', 'other']
        }
    }
    _handleSubmit = () => {
        let {title, price} = this.state;
        let url = 'http://10.0.2.2:4000';
        fetch(`${url}/products`,{
            body: JSON.stringify({title,price}),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r=> r.json)
        .then(p=> Alert.alert('success',`Product Saved Successfully with id: ${p.id}`))
    }
    render() {
        return (
            <View>
                <TextInput
                    placeholder="Product Title"
                    value={this.state.title}
                    onChangeText={(title) => this.setState({ title })}
                />
                <TextInput
                    placeholder="Product Price"
                    value={this.state.price}
                    onChangeText={(price) => this.setState({ price })}
                />
                <Picker>
                    {this.state.categories.map(
                        (c) => <Picker.item label={c} value={c} key={c} />
                    )}
                </Picker>
                <Button
                    title="ADD"
                    onPress={this._handleSubmit}
                ></Button>
            </View>
        )
    }
}