import React from 'react';
import ReactDOM from 'react-dom';
import {VotingContainer} from './components/Voting';
import {Route, Router, hashHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import {setState, setClientId} from './action_creators';
import getClientId from './client_id';
import remoteActionMiddleware from './remote_action_middleware';
import {Provider} from 'react-redux';
import App from './components/App';
import io from 'socket.io-client';
import {ResultsContainer} from './components/Results';

require('./style.css');

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state =>
    store.dispatch(setState(state))
);

const createStoreWithMiddleware = applyMiddleware(
    remoteActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducer);
store.dispatch(setClientId(getClientId()));

const routes = <Route component={App}>
  <Route path="/results" component={ResultsContainer}/>
  <Route path="/" component={VotingContainer} />
</Route>;

ReactDOM.render(
    <Provider store={store}>
      <Router history ={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);
//hashHistory manages the routing history with the hash portion of the URL

if (module.hot) {
  module.hot.accept();
}