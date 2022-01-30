import React from 'react';
import './styles/Navbar.css';

const Navbar = () => {
    return (
        <div id='nav-bar'>
            <div id='opt'><select><option>Building 1</option></select></div>
            <div id='input'><input type="text" placeholder="Search"></input>
            <button></button>
            </div>
            <div id='icon'>Icon</div>
        </div>
    );
}

export default Navbar;
