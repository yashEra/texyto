import React from 'react';
import './style/Member.css';
import yasithEranda from "../images/yasithEranda.jpeg"

const Member = (props) => {
    return ( 
    <div>
        <div className='member__container'>
            <div className='member__image'>
            <img src = {props.imageSource} alt=''/></div>
            <h2>{props.name}</h2>
            <h3>{props.designation}</h3>
            <p>{props.shortintro}</p>
        </div>
        
    </div> 
    );
    
}

export default Member;