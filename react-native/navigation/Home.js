import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

class Home extends React.Component {
    static navigationOptions = {
        title: 'Home'
    }
    render(){
        return (
            <View>
                <Button title="About" onPress={()=>{this.props.navigation.navigate('About')}} />
                <Button title="Contact" onPress={()=>{this.props.navigation.navigate('Contact')}} />
            </View>
        )
    }
}

export default Home;