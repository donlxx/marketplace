import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {appConstants} from "./constant";
import {Test} from "./component/Test";
import {Products} from "./component/Products";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reduxPromise from 'redux-promise'
import {rootReducer} from "./reducer/root.reducer";
import {ProductDetail} from "./component/Product.detail";

ReactDOM.render(
    // <React.StrictMode>
        <Provider store={applyMiddleware(reduxPromise)(createStore)(rootReducer)}>
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route path={appConstants.testRoute} component={Test}>
                        </Route>
                        <Route path={appConstants.productRoute} component={Products}/>
                        <Route path={`${appConstants.productDetailRoute}/:id`} component={ProductDetail}></Route>
                        <Route path="*">
                            <Redirect to={appConstants.productRoute}></Redirect>
                        </Route>
                    </Switch>
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
