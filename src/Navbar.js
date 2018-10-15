import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render(){
        return (
            <header>
                <div className = 'navbar-title'>
                    <h3>Recipe App</h3>
                </div> 
                <div className = 'navbar-buttons'>
                    <nav>
                        <li>New Recipe</li>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact Us</li>
                    </nav>
                </div> 
            </header>
        )
    }
}

export default Navbar;