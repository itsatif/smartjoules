import React, { useContext, useState } from 'react';
import './styles/LeftPanel.css';
import { Link } from 'react-router-dom';
import dataContext from '../context/Context';

const Leftpanel = () => {
    const[click,setClick] = useState(false);
    const {floor} = useContext(dataContext);
    console.log(floor);
    function selFloor(e){
            const select = document.querySelector(e);
            select.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setClick(false);
    }
    return (
        <div id='left-panel'>
            <Link  className='left-floor' to='/' onClick={()=>{selFloor('#EF')}}>{floor[2]}</Link>
            <Link className='left-floor' to='/' onClick={()=>{selFloor('#FF')}}>{floor[1]}</Link>
            <Link className='left-floor' to='/' onClick={()=>{selFloor('#SF')}}>{floor[0]}</Link>
        </div>
    );
}

export default Leftpanel;
