import React from 'react';
import FooterMenu from "./footerMenu";
import Copyright from "./copyright";
import FooterLogo from "./footerLogo";

function Footer(props) {
    return (
        <div className='footer'>
            <FooterLogo/>
            <FooterMenu/>
            <Copyright/>
        </div>
    );
}

export default Footer;