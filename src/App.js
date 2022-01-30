import React from 'react';
import NavBar from './components/NavBar';
import './App.css'
import Leftpanel from './components/LeftPanel';
import Rightpanel from './components/RightPanel';
import Content from './components/Content';



const App = () => {
  return (
    <div className='main'>
      <div><NavBar /></div>
      <div id="container">
      <div id='left-floor'><Leftpanel /></div>
      <div><Content/></div>
      <div><Rightpanel/></div>
      </div>
    </div>
  );
}

export default App;
