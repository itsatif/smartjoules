import React, { useContext } from 'react';
import './styles/RightPanel.css';
import SettingsCellIcon from '@mui/icons-material/SettingsCell';
import dataContext from '../context/Context';

const Rightpanel = ({defrost,error,vrf}) => {
    const {find} = useContext(dataContext);
    return (
        <div className={find.length>0 ? 'b1':'b2'}>
            <div className='box-main'>
                <h4>Outdoor Units</h4>
           <div className='box'>
               <div className='off'>Defrost: {defrost}</div>
               <div className='module'>{error}</div>
               <div className='vrf'>
                   {vrf.map((e,i)=>{
                       return <div key={i}><div><SettingsCellIcon/></div><div>VRF{e}</div></div>
                   })}
               </div>
               </div>
           </div>
        </div>
    );
}

export default Rightpanel;
