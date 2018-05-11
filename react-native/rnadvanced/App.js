/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';


import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import ProductDetail from './ProductDetail';
import AddProduct from './AddProduct';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const url = 'http://10.0.2.2:4000';
//type Props = {};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], page: 1 }
  }
  componentDidMount() {
    this._getData();
  }

  _getData = () => {
    fetch(`${url}/products?_page=${this.state.page}&_limit=7`)
      .then(r => r.json())
      .then(products => { this.setState({ products: [...this.state.products, ...products] }) });
  }

  _getMore = () => {
    this.setState({ page: ++this.state.page }, () => {
      this._getData();
    });
  }

  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => { this.props.navigation.navigate('Detail', item) }}>
        <Text style={{ margin: 10 }}>{item.id}-{item.title}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.products}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => `{item.id}`}
          onEndReachedThreshold={0.5}
          onEndReached={this._getMore}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const AppStack = createStackNavigator({
  List: {
    screen: App
  },
  Detail: {
    screen: ProductDetail
  }
}, {
    initialRouteName: 'List',
    navigationOptions: {
      title: 'Product Manager',
    }
  });

  const AppNavigator = createBottomTabNavigator({
    appStack : AppStack,
    add: {
      screen: AddProduct
    }
  })



export default AppNavigator;
