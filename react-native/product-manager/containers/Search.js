import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    ActivityIndicator,
    FlatList,
    RefreshControl,
} from 'react-native';
import SearchInput from '../components/SearchInput';
import ProductListItem from "../components/ProductListItem";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActionCreators from '../actionCreators/product';
import config from '../config';

let URI = config.baseUrl;

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        }
    }
    onSearchHandler = (e) => {
        let searchValue = e.nativeEvent.text
        this.setState({
            searchValue
        }, function () {
            this.props.actions.searchProducts(searchValue, 1, this.props.limit);
        });
    }

    onWishTapped = id => {
        let product = this.props.products.filter((item)=>{
          if(item.id === id){
            item['wish'] = true;
          }
          return item;
        });
        if(product.length){
          this.props.actions.addWishList(product, 'searchProducts');
        }
      };

    _getProducts = (page = 1, limit = 8) => {
        this.props.actions.searchProducts(this.state.searchValue, page, limit);
    };

    /*  flat list supporting methods */

    _getMore = () => {
        this._getProducts(++this.props.page, this.props.limit);
    };

    _renderItem = ({ index, item }) => {
        return (
            <ProductListItem
                {...this.props}
                id={item.id}
                title={`${item.id} - ${item.title}`}
                image={item.image ? `${URI}/images/${item.image}` : null}
                rating={item.rating}
                price={item.price}
                wish={item.wish || false}
                onWishTapped={this.onWishTapped}
            />
        );
    };

    _keyExtractor = (item, index) => {
        return `${index}`;
    };

    _onRefresh = () => {
        this._getProducts(++this.props.page, this.props.limit);
    };

    _renderRefreshControl() {
        return (
            <RefreshControl
                onRefresh={this._onRefresh}
                refreshing={this.props.isRefreshing}
                tintColor={"#00ff80"}
                title={"Refreshing..."}
                titleColor={"#00ff80"}
            />
        );
    }

    /*  flat list supporting methods - END */

    render() {
        const { searchValue } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.searchTextContainer}>
                    <SearchInput searchValue={searchValue} onSearchHandler={this.onSearchHandler} />
                </View>
                <View style={styles.searchResultcontainer}>
                    {this.props.isLoading ? (
                        <ActivityIndicator size="large" color="#00ff80" />
                    ) : (
                            <FlatList
                                data={this.props.products}
                                renderItem={this._renderItem}
                                keyExtractor={this._keyExtractor}
                                onEndReachedThreshold={0.5}
                                onEndReached={this._getMore}
                                refreshControl={this._renderRefreshControl()}
                            />
                        )}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
        backgroundColor: "#ffffff"
    },
    searchTextContainer: {
        flex: 1,
        backgroundColor: 'grey',
    },
    searchResultcontainer: {
        flex: 7,
        alignItems: "stretch",
        backgroundColor: "#ffffff"
    }
});

function mapStateToProps(state) {
    return {
        isLoading: state.productState.isLoading,
        products: state.productState.searchProducts,
        page: state.productState.page,
        limit: state.productState.limit,
        isRefreshing: state.productState.isRefreshing,
    }

}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(productActionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(
    Search
);