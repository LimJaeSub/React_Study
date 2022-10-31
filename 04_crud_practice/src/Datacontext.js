import React from 'react'

const DataContext = React.createContext({
    data:[],
    onCreate:()=>{},
    onEdit:()=>{},
    onRemove:()=>{},
});

export default DataContext;