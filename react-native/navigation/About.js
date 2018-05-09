import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

class About extends React.Component {
    static navigationOptions = {
        title: 'About'
    }
    render(){
        return (
            <View>
                <Button title="Home" onPress={()=>{this.props.navigation.navigate('Home')}} />
                <Button title="Contact" onPress={()=>{this.props.navigation.navigate('Contact')}} />
            </View>
        )
    }
}

export default About;