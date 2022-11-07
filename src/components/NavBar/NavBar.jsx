import React from 'react';
import './NavBar.css';

function NavBar () {
    
    return (
        <section>
            <a href="/projects" className="navbar-item">Projects</a>
            <a href="/technologies" className="navbar-item">Technologies</a>
            <a href="/about" className="navbar-item">About</a>
        </section>
    )
}

export default NavBar;