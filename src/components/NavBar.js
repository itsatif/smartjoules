import React, { useState } from 'react';
import './styles/Navbar.css';
import data from '../data.json'


const Navbar = () => {

    const[idx,setIdx] = useState(0);
    console.log(idx);
    return (
        <div id='nav-bar'>
            <div id='opt'><select onChange={(e)=>setIdx(e.target.value)}>
            <option value="0">Building1</option>
            <option value="1">Building2</option>
            <option value="2">Building3</option>
            <option value="3">Building4</option>
            </select></div>
            <div id='input'><input type="text" placeholder="Search"></input>
            <button></button>
            </div>
            <div id='icon'>icon</div>
        </div>
    );
}

export default Navbar;
