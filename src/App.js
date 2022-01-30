import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import './App.css'
import Leftpanel from './components/LeftPanel';
import Rightpanel from './components/RightPanel';
import Content from './components/Content';
import data from './data.json'



const App = () => {
  const [floor,setFloor] = useState([]);
     console.log(data[0].R1[0].floor);
     useEffect(()=>{
      setFloor(data[0].R1);
      console.log(floor);
     })
  return (
    <div className='main'>
      <div><NavBar /></div>
      <div id="container">
      <div id='left-floor'><Leftpanel /></div>
      <div>
        {floor.map((ele,i)=>{
          return <Content key={i} name={ele.floor} />
        })}
      </div>
      <div><Rightpanel/></div>
      </div>
    </div>
  );
}

export default App;
