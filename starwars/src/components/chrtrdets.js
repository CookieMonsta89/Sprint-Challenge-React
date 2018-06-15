import React from 'react';
import './StarWars.css';
import luke from './luke.jpg';

const CharacterDetails = (props) => {
    return (
        <div className="carddiv">
   
   <img src={luke} />
            
            <h1>
            Name: {props.name}
            </h1>
            <h1>
            
            Gender: {props.gender}
            
            </h1>
            <h1>
            Birth Year: {props.birth_year}
            </h1>
        
        
        
        </div>
    )
}

export default CharacterDetails