import React, {useState } from 'react';
import dataContext from './Context';

const Filter = ({children}) => {
    const [filter,setFilter] = useState([]);
    const [idx,setIdx] = useState(0);
     return (
        <dataContext.Provider value={{filter,setFilter,idx,setIdx}}>
            {children}
        </dataContext.Provider>
    );
}

export default Filter;
