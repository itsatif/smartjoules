import React, { useEffect, useState } from 'react';
import './styles/Content.css';
import Floor from './Floor';
import data from '../data.json';

const Content = ({name}) => {
    const [room,setRoom] = useState([]);
    useEffect(()=>{
        let arr = data[0].R1[0].Room;
        setRoom(arr);
        //console.log(arr);
    })
    return (
        <div>
            <h4>Circuit</h4>
           <h2>{name}:Indoor Units</h2>
           {room.map((ele,i)=>{
               return <Floor key={i} sairtem={ele.SupplyAirtemp} at={ele.Areatemp} ah={ele.AreaHumidity} status={ele.status}/>
           })}
        </div>
    );
}

export default Content;
