import React from 'react';
import BasketItem from './BasketItem';
import './BasketList.css';

function BasketList(props){
    let products;
    if (props.items.length !== 0){
        products = props.items.map((item, index) => {
            if (props.purchased && item.unMarked){
                return null;
            }
        return (
            <li className='item' key={item.name}>
            <BasketItem name={item.name} 
            amount={item.amount}
            unMarked = {item.unMarked}
            onClick={()=>{props.onClick(item.name)}}/>
            </li>
        )});
    }
    else {
        products = 'yout basket is empty!';
    }
    return(
        <div>
            <ul>
                <h1>Basket</h1>
                {products}
            </ul>
        </div>
    );
}
export default BasketList;