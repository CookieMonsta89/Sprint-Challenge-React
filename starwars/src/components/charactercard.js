import React from 'react';
import CharacterDetails from './chrtrdets';

const Character = (props) => {
    let cards = props.info.starwarsChars.map(cards => (
        <CharacterDetails
            name={cards.name}
            gender={cards.gender}
            birth_year={cards.birth_year}
            key={cards.created}


            />
    ))

    return (
        
        <div className="card">
        
            {cards}
            
            
        </div>
    )


}

export default Character