import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {appConstants} from "./constant";
import {Products} from "./component/Products";
import {Provider, useSelector} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reduxPromise from 'redux-promise'
import {rootReducer} from "./reducer/root.reducer";
import {ProductDetail} from "./component/Product.detail";
import {Compare} from "./component/Compare";
import {Login} from "./component/Login";
import {PrivateRoute} from "./PrivateRoute";

// const auth= useSelector(state=>state.auth);

ReactDOM.render(
    // <React.StrictMode>
        <Provider store={applyMiddleware(reduxPromise)(createStore)(rootReducer)}>
            <BrowserRouter>
                <App>
                    {/*<div>{JSON.stringify(auth)}</div>*/}
                    <Switch>
                        {/*<Route path={appConstants.testRoute} exact component={Login}> </Route>*/}
                        <PrivateRoute path={appConstants.testRoute} exact comp={Login}></PrivateRoute>
                        <PrivateRoute path={appConstants.loginRoute} exact comp={Login}></PrivateRoute>
                        <Route path={appConstants.productCompareRoute} exact component={Compare}></Route>
                        <Route path={appConstants.productRoute} exact component={Products}/>
                        <Route path={`${appConstants.productDetailRoute}/:id`} exact component={ProductDetail}></Route>
                        <Redirect to={appConstants.testRoute} ></Redirect>

                    </Switch>
                    {/*<MyRouter/>*/}
                </App>
            </BrowserRouter>
        </Provider>
    // </React.StrictMode>,
    ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
