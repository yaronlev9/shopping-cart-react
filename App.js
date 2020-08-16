import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import GroceriesList from './GroceriesList';
import BasketList from './BasketList';
import './App.css';


let items = ['Strawberry', 'Blueberry', 'Orange', 'Banana', 'Apple', 'Carrot', 'Celery', 'Mushroom', 'Green Pepper', 'Eggs', 'Cheese',
'Butter', 'Chicken', 'Beef', 'Pork', 'Fish', 'Rice', 'Pasta', 'Bread']

function App() {
  const [groceryItems, setGroceryItems] = useState(items);
  const [basketItems, setbasketItems] = useState([]);
  const [purchased, setPurchased] = useState(false);
  const [toFind, settoFind] = useState('');
  let basketArr = basketItems.slice();
  function handleClick(name) {
    let flag = false;
    for (let item of basketArr){
      if (item.name === name){
        item.amount ++;
        flag = true;
        setbasketItems([...basketArr]);
      }
    }
    if (!flag){
      let newProduct = {
        name: name,
        amount: 1,
        unMarked: true,
      }
      setbasketItems([...basketItems, newProduct]);
    }
  }

  function unMark(name) {
    for (let item of basketArr){
      if (item.name === name){
        item.unMarked = !item.unMarked;
        setbasketItems([...basketArr]);
      }
    }
  }

  function clearLst() {
      setbasketItems([]);
  }

  function handleFooter(name) {
    if (name==='purchased'){
      setGroceryItems([]);
      setPurchased(true);
    }
    else if(name === 'all'){
      setGroceryItems(items);
      setPurchased(false);
    }
  }
  function handleChange(value) {
    settoFind(value);
    let groceryArr = [];
    for (let item of items){
      if (item.includes(value)){
        groceryArr.push(item);
      }
    }
    setGroceryItems([...groceryArr]);
  }

  return (
    <div className="App">
      <Header value={toFind} onChange={e => handleChange(e)}/>
        <i className="fa fa-trash" aria-hidden="true" onClick={clearLst}> clear list</i>
      <div className="flex-container">
        <div>
        <GroceriesList items={groceryItems} onClick={(name)=>handleClick(name)}/>
        </div>
        <div>
        <BasketList purchased={purchased} items={basketItems} onClick={(name)=>unMark(name)}/>
        </div>
      </div>
      <Footer onClick={(name)=>handleFooter(name)}/>
    </div>
  );
}


export default App;
