import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from "@expo/vector-icons"

class SearchInput extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Ionicons style={styles.searchIcon} name="ios-search" size={20} color="#000"/> 
                <TextInput
                    style={styles.TextInputStyle}
                    value={this.props.searchValue}
                    onChange={(e) => this.props.onSearchHandler(e)}
                    placeholderTextColor="grey"
                    placeholder="Search"
                    underlineColorAndroid="transparent"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: 'grey',
        borderWidth: 1,
        margin:10,
        padding:5,
        borderRadius: 20
    },
    searchIcon: {
        padding: 10,
    },
    TextInputStyle: {
        flex: 1,
        paddingTop: 5,
        paddingRight: 5,
        paddingBottom: 5,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
});

export default SearchInput;