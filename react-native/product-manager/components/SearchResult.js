import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class SearchResult extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>No Result Found</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 7,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff"
    },
});

export default SearchResult;