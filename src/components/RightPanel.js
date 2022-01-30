import React from 'react';
import './styles/RightPanel.css';
const Rightpanel = () => {
    return (
        <div>
            <div className='box-main'>
                <h4>Outdoor Units</h4>
           <div className='box'>
               <div className='off'>Defrost: OFF</div>
               <div className='module'>Interface Module Error</div>
               <div className='vrf'>
                   <div>VRF1</div>
                   <div>VRF2</div>
                   <div>VRF3</div>
               </div>
               </div>
           </div>
        </div>
    );
}

export default Rightpanel;
