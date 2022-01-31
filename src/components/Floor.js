import React, { useState } from 'react';
import './styles/Content.css';
import { Switch } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';
import DevicesIcon from '@mui/icons-material/Devices';
import EditIcon from '@mui/icons-material/Edit';

const Floor = ({id,Ot,sairtem,at,ah,status,st}) => {
    const [checked,setChecked] = useState(true);
    const toggleSwitch = () => checked===true ? setChecked(false):setChecked(true);
    return (
        <div>
            <div className=  {checked ? 'room':'faderoom'}>
               <div className='block1'><DevicesIcon/><h4>{Ot}{id}</h4></div>
               <div className='block'><div>Set Temp<EditIcon/>{st}</div></div>
               <div className='block'><div>Supply Air Temp</div><div>{sairtem}</div></div>
               <div className='block'><div>Area Temp</div><div>{at}</div></div>
               <div className='block'><div>Area Humidity</div><div>{ah}%</div></div>
               <div className='blocklast'><div>Status</div><div>{status}<Switch checked={checked}  inputprops={{ 'aria-label': 'controlled' }} onChange={toggleSwitch}></Switch></div></div>
           </div>
        </div>
    );
}

export default Floor;
