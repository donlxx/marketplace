import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {appConstants} from "./constant";
import {Test} from "./component/Test";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <App>
              <Switch>
                  <Route path={appConstants.testRoute} component={Test}>
                  </Route>
                  <Route path="*">
                      <Redirect to={appConstants.homeRoute}></Redirect>
                  </Route>
              </Switch>
          </App>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
