import React from 'react';
import './styles/RightPanel.css';
const Rightpanel = ({defrost,error,vrf}) => {
    return (
        <div>
            <div className='box-main'>
                <h4>Outdoor Units</h4>
           <div className='box'>
               <div className='off'>Defrost: {defrost}</div>
               <div className='module'>{error}</div>
               <div className='vrf'>
                   {vrf.map((e,i)=>{
                       return <div key={i}>VRF{e}</div>
                   })}
               </div>
               </div>
           </div>
        </div>
    );
}

export default Rightpanel;
