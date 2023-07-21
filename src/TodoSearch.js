
import './TodoSearch.css'
import React from 'react';

function TodoSearch (props/*{searchValue, setSearchValue}*/) {
    return (
      <>
      <input placeholder="Cortar Cebolla"  className="TodoSearch" value={props.searchValue} onChange={(event)=>{
            props.setSearchValue(event.target.value)
            console.log(event.target.value)}} />
      <br />
      <hr />
      </>
    );
  }
  
export { TodoSearch }; //Exportacion nombrada