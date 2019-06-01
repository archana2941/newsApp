import React, {Component} from 'react';
import {Provider} from 'react-redux';
import NewsPortal from './NewsPortal';
import configureStore from './store/store';

const {store} = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NewsPortal/>
      </Provider>
    );
  }
}
export default App;
