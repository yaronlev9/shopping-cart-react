import React from 'react';
import GroceryItem from './GroceryItem';
import './GroceriesList.css';

function GroceriesList(props){
    // const [groceries, setGroceries] = useState(items);
    const products = props.items.map((item, index) => {
        return (
            <li className='item' key={item}>
            <GroceryItem value={item} 
            onClick={()=>{props.onClick(item)}}/>
            </li>
        )});
    return(
        <div>
            <h1>Groceries</h1>
            <ul>
                {products}
            </ul>
        </div>
    );
}
export default GroceriesList;