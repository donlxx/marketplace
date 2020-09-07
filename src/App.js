import React from 'react';

import './App.css';
import Header from "./component/Header";

function App(props) {
    console.log(props);
    return (
        <div>
            {/*<p>caonima</p>*/}

                <Header> {props.children} </Header>

            <main>
                {/*{props.children}*/}
            </main>
        </div>


    );
}

export default App;
