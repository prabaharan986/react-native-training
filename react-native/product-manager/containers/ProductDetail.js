import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActionCreators from "../actionCreators/product";
import config from '../config';

let URI = config.baseUrl;

class ProductDetail extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Product Detail for ${navigation.state.params.id}`
  });

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { id } = this.props.navigation.state.params;
    console.log(id);
    this.props.actions.getProduct(id);
  }

  renderProduct() {
    const { navigation,product } = this.props;
    return (<View>
      <Image
        source={product.image ? { uri: `${URI}/images/${product.image}` } : require("../assets/barcode.png")}
        style={{ height: 200, marginTop: 20 }}
        resizeMode="contain"
      />
      <Text style={styles.title}>{product.id} - {product.title}</Text>
      <Text style={[styles.title, { fontSize: 16 }]}>
        {product.additionalInfo && `(${product.additionalInfo})`}
      </Text>
    </View>)
  }

  render() {
    const { isLoading } = this.props;
    return (
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#00ff80" />
        ) : (
            this.renderProduct()
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    padding: 10
  },
  title: {
    fontSize: 24,
    padding: 10
  }
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActionCreators, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    product: state.productState.product,
    isLoading: state.productState.isLoading,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ProductDetail
);

