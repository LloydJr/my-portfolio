import React from 'react';
import { NavBar } from '../../components';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

import './Header.css';
function Header () {

    return (
        <section className="header">
           <section className="header-top">
            <section className="header-top__logo">
                <a href="/" className="header-logo" LOGO>
                    Lloyd Perez
                </a>
            </section>
            <section className="header-top__navbar">
            <section className="header-top__navigation">
                <NavBar />
            </section>
            <hr className="header-top__seperator" />
            </section>
           </section>
           <section className="header-bottom">
            <section className="header-bottom__phone">
                <PhoneIcon />(610)704-2237
            </section>
            <section className="header-bottom__email">
                <EmailIcon />lloydjperez@gmail.com
            </section>
           </section>
        </section>
    )
}

export default Header;