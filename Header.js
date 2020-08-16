import React from 'react';
import './Header.css';

function Header(props){


 return(
    <div>
        <br/>
        <i className="fa fa-shopping-basket fa-6" aria-hidden="true"></i>
        <h1 className="App-title">Hello, Basket!</h1>
        <div className="topnav">
            <input type="text" placeholder="Search.." value={props.value} onChange={(e)=>{props.onChange(e.target.value)}}/>
        </div>
    </div>
 );   
}

export default Header;