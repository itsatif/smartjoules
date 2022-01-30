import React from 'react';
import './styles/Content.css';


const Content = () => {
    return (
        <div>
            <h4>Circuit</h4>
           <h2>2nd Floor:Indoor Units</h2>
           <div className='room'>
               <div className='block'>Cardiac OT 1</div>
               <div className='block'><div>Set Temp</div></div>
               <div className='block'><div>Supply Air Temp</div><div>20.8 C</div></div>
               <div className='block'><div>Area Temp</div><div>21.2 C</div></div>
               <div className='block'><div>Area Humidity</div><div>60%</div></div>
               <div className='blocklast'><div>Status</div><div>True</div></div>
           </div>
        </div>
    );
}

export default Content;
