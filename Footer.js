import React from 'react';
import './Footer.css';

function Footer(props){
    return(
        <div>
            <p className="footer">
            <button className='all' onClick={()=>{props.onClick('all')}}>
            All
            </button>
            <button className='purchased' onClick={()=>{props.onClick('purchased')}}>
            Purchased
            </button>
            </p>
        </div>
    );
}

export default Footer;