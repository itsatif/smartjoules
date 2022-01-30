import React, { useContext, useState,useEffect } from 'react';
import './styles/Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import QrCodeIcon from '@mui/icons-material/QrCode';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from '@mui/material/Input';
import {InputAdornment} from '@material-ui/core'
import dataContext from '../context/Context';


const Navbar = () => {
    const [keyword,setKeyword] = useState("");
    const[idx,setIdx] = useState(0);
    const {setFind} = useContext(dataContext);
    const {setNum} = useContext(dataContext);
   // console.log(idx);
    useEffect(()=>{
        if(idx===undefined){
            setNum(0);
        }else{
            setNum(parseInt(idx));
        }
        setFind(keyword);
    })
    //console.log(keyword);
    return (
        <div id='nav-bar'>
            <div id='opt'><Select onChange={(e)=>setIdx(e.target.value)}>
            <MenuItem value="0"><MapsHomeWorkIcon/>Building1</MenuItem>
            <MenuItem value="1"><MapsHomeWorkIcon/>Building2</MenuItem>
            <MenuItem value="2"><MapsHomeWorkIcon/>Building3</MenuItem>
            <MenuItem value="3"><MapsHomeWorkIcon/>Building4</MenuItem>
            </Select></div>
            <div id='input'><Input type="search" placeholder="Search"  startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>} onChange={(e)=>setKeyword(e.target.value)}></Input>

            </div>
            <div id='icon'><QrCodeIcon/></div>
        </div>
    );
}

export default Navbar;
