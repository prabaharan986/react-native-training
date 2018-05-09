import React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { incrementAction, decrementAction } from './actionCreators';


class Counter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="INC"
                    onPress={this.props.inc}
                />
                <Text>{this.props.ctr}</Text>
                <Button
                    title="DEC"
                    onPress={this.props.dec}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
  });

function mapStateToProps(state) {
    return {
        ctr: state.counter
    }

}

function mapDispatchToProps(dispatch) {
    return {
        inc: () => { dispatch(incrementAction()) },
        dec: () => { dispatch(decrementAction()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

