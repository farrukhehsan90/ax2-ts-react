import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyRoutes from './routes';
import { Provider } from 'react-redux';
import Store from './redux/store';
import io from 'socket.io-client';

const store = Store();

export default class App extends Component {
  socket: any;

  componentDidMount() {
    this.socket = io('http://192.168.1.110:3000');
  }

  render() {
    return (
      <Provider store={store}>
        <MyRoutes />
      </Provider>
    );
  }
}
