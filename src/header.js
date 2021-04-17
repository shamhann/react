import React from 'react';
import Logo from "./logo";
import Menu from "./menu";

function Header(props) {
    return (
        <div className = 'header'>
            <Logo/>
            <Menu/>
        </div>
    );
}

export default Header;