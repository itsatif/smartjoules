import React from 'react';
import './styles/Content.css';

const Floor = ({sairtem,at,ah,status}) => {
    return (
        <div>
            <div className='room'>
               <div className='block'>CardiacOT 1</div>
               <div className='block'><div>Set Temp</div></div>
               <div className='block'><div>Supply Air Temp</div><div>{sairtem}</div></div>
               <div className='block'><div>Area Temp</div><div>{at}</div></div>
               <div className='block'><div>Area Humidity</div><div>{ah}%</div></div>
               <div className='blocklast'><div>Status</div><div>{status}</div></div>
           </div>
        </div>
    );
}

export default Floor;
