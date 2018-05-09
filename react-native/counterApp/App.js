import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, StyleSheet } from 'react-native';
import Counter from './counter';
import reducers from './reducers';

const store = createStore(reducers);

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Counter />
        </View>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
  },
});