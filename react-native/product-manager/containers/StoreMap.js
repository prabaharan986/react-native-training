import React, { Component } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { MapView } from "expo";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as storeActionCreators from '../actionCreators/store';


class StoreMap extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.actions.getStores();
  }
  renderStore() {
    const { stores } = this.props;
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: stores[0].latitude,
          longitude: stores[0].longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        {stores.map(s => (<MapView.Marker
          coordinate={{
            latitude: s.latitude,
            longitude: s.longitude
          }}
          title={s.title}
          key={s.id}
        />
        ))}
      </MapView>
    );
  }
  render() {
    const { isLoading } = this.props;
    return (
      <View style={styles.container}>
      {
        isLoading ? (
          <ActivityIndicator size = "large" color = "#00ff80" />
        ): (
            this.renderStore()
          )
      }
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
  }
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(storeActionCreators, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    stores: state.storeState.stores,
    isLoading: state.storeState.isLoading,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreMap);
