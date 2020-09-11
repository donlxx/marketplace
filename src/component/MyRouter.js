import React from "react";
import {useSelector} from "react-redux";
import {Redirect, Route, Switch} from "react-router-dom";
import {appConstants} from "../constant";
import {Compare} from "./Compare";
import {Login} from "./Login";
import {Products} from "./Products";
import {ProductDetail} from "./Product.detail";
import {Login} from "./Login";

export const MyRouter = () => {
    const auth = useSelector(state => state.auth);
    if (!!auth.islogin) {
        console.log('hey i am already login');
        return (
            <Switch>
                <Route path={appConstants.testRoute} component={Login}> </Route>
                <Route path={appConstants.productCompareRoute} component={Compare}></Route>

                <Route path={appConstants.productRoute} component={Products}/>
                <Route path={`${appConstants.productDetailRoute}/:id`} component={ProductDetail}></Route>

                <Route path="*">
                    <Redirect to={appConstants.productRoute}></Redirect>
                </Route>

            </Switch>
        );
    } else {
        console.log('hey i am not login');
        return (
            <Switch>
                <Route path={appConstants.loginRoute} component={Login}></Route>
                <Route path="*">
                    <Redirect to={appConstants.loginRoute}></Redirect>
                </Route>
            </Switch>
        );
    }
}
