import React from 'react';

function GroceryItem(props){
 return(
    <button className='item' onClick={()=>{
        props.onClick()}}>
        {props.value}
      </button>
 );   
}

export default GroceryItem;