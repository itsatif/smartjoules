import React, { useState } from 'react';
import dataContext from './Context';



const Wrapper = ({children}) => {
    const [num,setNum] = useState(0);
    const [floor,setFloor] = useState([]);
    const [find,setFind] = useState("");
    return (
        <dataContext.Provider value={{num,setNum,floor,setFloor,find,setFind}}>
            {children}
        </dataContext.Provider>
    );
}

export default Wrapper;
