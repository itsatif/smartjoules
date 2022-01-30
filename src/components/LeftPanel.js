import React, { useState } from 'react';
import './styles/LeftPanel.css';
import { Link } from 'react-router-dom';

const Leftpanel = () => {
    const[click,setClick] = useState(false);
    function selFloor(e){
            const select = document.querySelector(e);
            select.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setClick(false);
    }
    return (
        <div id='left-panel'>
            <Link className='left-floor' to='/' onClick={()=>{selFloor('#EF')}}>8th Floor</Link>
            <Link className='left-floor' to='/' onClick={()=>{selFloor('#FF')}}>4th Floor</Link>
            <Link className='left-floor' to='/' onClick={()=>{selFloor('#SF')}}>2nd Floor</Link>
        </div>
    );
}

export default Leftpanel;
