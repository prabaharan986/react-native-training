import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

class Contact extends React.Component {
    static navigationOptions = {
        title: 'Contact',
        headerStyle: {
            backgroundColor: 'lightgreen'
        }
    }

    render(){
        console.log(this.props);
        return (
            <View>
                <Button title="Home" onPress={()=>{this.props.navigation.navigate('Home')}} />
                <Button title="About" onPress={()=>{this.props.navigation.navigate('About')}} />
            </View>
        )
    }
}

export default Contact;