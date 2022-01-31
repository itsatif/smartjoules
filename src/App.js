import React  from 'react';
import NavBar from './components/NavBar';
import './App.css';
import Leftpanel from './components/LeftPanel';
import Rightpanel from './components/RightPanel';
import outdoor from './outdoor.json';
import Buildings from './components/Buildings';
import Wrapper from './context/Wrapper';
import { HashRouter } from "react-router-dom";

const App = () => {
  return (
    <Wrapper>
      <HashRouter>
    <div className='main'>
      <div id="nav"><NavBar/></div>
      <div id="container">
      <div id='left-floor'><Leftpanel /></div>
      <div id='Box'><Buildings/>
      </div>
      <div>{
        outdoor.map((ele,i)=>{
          return <Rightpanel key={i} defrost={ele.Defrost} error={ele.Error} vrf={ele.VRF}/>
        })
        }</div>
      </div>
    </div>
    </HashRouter>
    </Wrapper>
  );
}

export default App;
