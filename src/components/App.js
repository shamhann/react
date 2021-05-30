import React from 'react';
import Header from "./Header";
import Todos from "./Todos";

function App(props) {
    return (
        <div>
            <Header/>
            <Todos/>
        </div>
    );
}

export default App;