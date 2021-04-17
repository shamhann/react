import React from 'react';
import Header from "./header";
import MainContent from "./mainContent";
import Footer from "./footer";
function App(props) {
    return (
        <div className='app'>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    );
}

export default App;