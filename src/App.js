import React from 'react';

import './App.css';
import Header from "./component/Header";

function App(props) {
    console.log(props);
  return (
    <div>
      {/*<p>caonima</p>*/}
      <nav>
      <Header> </Header>
      </nav>
        <main>
            {props.children}
        </main>
    </div>


  );
}

export default App;
