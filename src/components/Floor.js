import React from 'react';
import './styles/Content.css';
import { Switch } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';

const Floor = ({sairtem,at,ah,status}) => {
    return (
        <div>
            <div className='room'>
               <div className='block'>CardiacOT 1</div>
               <div className='block'><div>Set Temp</div></div>
               <div className='block'><div>Supply Air Temp</div><div>{sairtem}</div></div>
               <div className='block'><div>Area Temp</div><div>{at}</div></div>
               <div className='block'><div>Area Humidity</div><div>{ah}%</div></div>
               <div className='blocklast'><div>Status</div><div>{status}<Switch></Switch></div></div>
           </div>
        </div>
    );
}

export default Floor;
