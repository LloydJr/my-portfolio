import React from 'react';
import { NavBar } from '../../components';

import './Header.css';
function Header () {

    return (
        <section className="header">
           <section className="header-top">
            <section className="header-top_logo">
                <a href="/" className="header-logo" LOGO>
                    Logo
                </a>
            </section>
            <section className="header-top_navbar">
                <NavBar />
            </section>
           </section>
           <section className="header-bottom">
            <section className="header-bottom_phone">
                (xxx)xxx-xxxx
            </section>
            <section className="header-bottom_email">
                xxx@gmail.com
            </section>
           </section>
        </section>
    )
}

export default Header;