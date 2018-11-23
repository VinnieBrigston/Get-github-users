import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import User from './containers/User';
import Users from './containers/Users';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path="/users/:name" exact component={User} />
        </Switch>
      </div>
    </Router>
  </Provider>,
	document.getElementById('root'));

serviceWorker.unregister();
