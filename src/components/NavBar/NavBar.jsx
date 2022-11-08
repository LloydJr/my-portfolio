import React from 'react';
import './NavBar.css';


function NavBar () {
    
    return (
        <section className="navbar">
            <a href="#about" className="navbar-item">About</a>
            <a href="#projects" className="navbar-item">Projects</a>
            <a href="#technologies" className="navbar-item">Technologies</a>
            <a href="https://www.linkedin.com/in/lloyd-j-perez-jr/" className="navbar-item" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/LloydJr" className="navbar-item" target="_blank" rel="noopener noreferrer">GitHub</a>
        </section>
    )
}

export default NavBar;