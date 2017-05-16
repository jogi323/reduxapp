import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import Login from './components/login';
import Signup from './components/signup';
import Data from './components/data';


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path={'/'} component={Login}></Route>
        <Route path={'/signup'} component={Signup}></Route>
        <Route path={'/data'} component={Data}></Route>
      </div>
       
    </Router>
  </Provider>,
  document.getElementById('root')
);
