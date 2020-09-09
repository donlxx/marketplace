import React from 'react';

import './App.css';
import Header from "./component/Header";
import {useDispatch} from "react-redux";
import {getProducts} from "./action/product.action";

function App(props) {
    const dispatch= useDispatch();
    dispatch(getProducts());
    // console.log(props);
    return (
        <div>
            {/*<p>caonima</p>*/}
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
