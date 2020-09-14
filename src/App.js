import React from 'react';

import './App.css';
import Header from "./component/Header";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "./action/product.action";
import {checkLogin} from "./action/auth.action";

function App(props) {
    const dispatch= useDispatch();
    dispatch(getProducts());
    dispatch(checkLogin());
    // const auth=useSelector(state=>state.auth);
    // console.log(props);
    return (

        <div>
            <nav>
                <Header> {props.children} </Header>
            </nav>
            <main>
                {/*{props.children}*/}
            </main>
        </div>


    );
}

export default App;
