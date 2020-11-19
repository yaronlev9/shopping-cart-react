import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GroceriesList from './components/GroceriesList';
import BasketList from './components/BasketList';
import './App.css';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


firebase.initializeApp({
  apiKey: "AIzaSyC138QFE-DV7pikqHtOkA8VJzW2YDmjji8",
  authDomain: "shopping-cart-e46ac.firebaseapp.com",
  databaseURL: "https://shopping-cart-e46ac.firebaseio.com",
  projectId: "shopping-cart-e46ac",
  storageBucket: "shopping-cart-e46ac.appspot.com",
  messagingSenderId: "276248348751",
  appId: "1:276248348751:web:c3ffd16c6d1995112f823a",
  measurementId: "G-GT3DNRRE57"
});

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
        <div className="remove">
        <i className="fa fa-trash" aria-hidden="true" onClick={clearLst}> clear list</i>
        </div>
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
