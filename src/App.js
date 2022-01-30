import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import './App.css'
import Leftpanel from './components/LeftPanel';
import Rightpanel from './components/RightPanel';
import Content from './components/Content';
import data from './data.json'
import Content2 from './components/Content2';
import Content3 from './components/Content3';
import outdoor from './outdoor.json';


const App = () => {
  
  return (
    <div className='main'>
      <div><NavBar /></div>
      <div id="container">
      <div id='left-floor'><Leftpanel /></div>
      <div id='Box'><Content/>
      <Content2 />
      <Content3/>
      </div>
      <div>{
        outdoor.map((ele,i)=>{
          return <Rightpanel key={i} defrost={ele.Defrost} error={ele.Error} vrf={ele.VRF}/>
        })
        }</div>
      </div>
    </div>
  );
}

export default App;
