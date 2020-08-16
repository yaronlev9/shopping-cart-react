import React from 'react';

function BasketItem(props){
  let name = props.unMarked ? 'unmarked-btn' : 'marked-btn'
 return(
    <button className={name} onClick={()=>{
        props.onClick()}}>
        {props.name}: {props.amount}
      </button>
 );   
}
export default BasketItem;