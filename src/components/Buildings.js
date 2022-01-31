import React, { useContext, useEffect ,useState} from 'react';
import dataContext from '../context/Context';
import data from '../data.json';
import Floor from './Floor';



const Buildings = () => {
    const {num} = useContext(dataContext);
    const {setFloor} = useContext(dataContext);
    const [room,setRoom] = useState([]);
    const [flr,setFlr] = useState([]);
    const [room1,setRoom1] = useState([]);
    const [room2,setRoom2] = useState([]);
    const {find} = useContext(dataContext);
    useEffect(()=>{
        setFloor(data[num].Building.map(e=>e.floor))
        setFlr(data[num].Building.map(ele=>ele.floor));
        setRoom(data[num].Building[0].Room);
        setRoom1(data[num].Building[1].Room);
        setRoom2(data[num].Building[2].Room);
    },[num])
    
    return (
        <div className={find.length>0 ? 'Cont':'Content'}>
        <div className='Content' id='SF'>
            <h4>Circuit</h4>
           <h2>{flr[0]}:Indoor Units</h2>
           {room.map((ele,i)=>{
               return <Floor key={i} id={ele.id} Ot ={ele.Ot} sairtem={ele.SupplyAirtemp} at={ele.Areatemp} ah={ele.AreaHumidity} status={ele.status}/>
           })}
           
        </div>
        <div className='Content' id='FF'>
            <h4>Circuit</h4>
           <h2>{flr[1]}:Indoor Units</h2>
           {room1.map((ele,i)=>{
               return <Floor key={i} id={ele.id} Ot ={ele.Ot} sairtem={ele.SupplyAirtemp} at={ele.Areatemp} ah={ele.AreaHumidity} status={ele.status}/>
           })}
           
        </div>
        <div className='Content' id='EF'>
            <h4>Circuit</h4>
           <h2>{flr[2]}:Indoor Units</h2>
           {room2.map((ele,i)=>{
               return <Floor key={i} id={ele.id} Ot ={ele.Ot} sairtem={ele.SupplyAirtemp} at={ele.Areatemp} ah={ele.AreaHumidity} status={ele.status}/>
           })}
           
        </div>
      </div>
    );
}

export default Buildings;
