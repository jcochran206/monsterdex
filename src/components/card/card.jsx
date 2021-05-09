
import React from 'react';
import './card.styles.css';


export const Card = (props) => {
    let robourl = `https://robohash.org/` + `${props.monster.id}` +'?set=set2';
    return(
    <div className='card-container'>
        <img alt="monster" src={robourl} />
        <h2 key={props.monster.id}>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>)
}

