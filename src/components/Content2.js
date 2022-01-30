import React, { useEffect, useState } from 'react';
import './styles/Content.css';
import Floor from './Floor';
import data from '../data.json';

const Content2 = () => {
    const [room,setRoom] = useState([]);
    useEffect(()=>{
        let newArr = data[0].Building1.map(ele=>ele.Room);
        console.log(newArr);
        let arr = data[0].Building1[1].Room;
        setRoom(arr);
        //console.log(arr);
    },[])
    return (
        <div className='Content' id='FF'>
            <h4>Circuit</h4>
           <h2>4th Floor:Indoor Units</h2>
           {room.map((ele,i)=>{
               return <Floor key={i} id={ele.id} Ot ={ele.Ot} sairtem={ele.SupplyAirtemp} at={ele.Areatemp} ah={ele.AreaHumidity} status={ele.status}/>
           })}
           
        </div>
    );
}

export default Content2;
