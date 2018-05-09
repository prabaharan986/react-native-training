import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './counter';
import reducers from './reducers';

const store = createStore(reducers);

export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}
