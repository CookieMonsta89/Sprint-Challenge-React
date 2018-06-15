import React from 'react';
import CharacterDetails from './chrtrdets';

const Character = (props) => {
    let card = props.info.starwarsChars.map(card => (
        <CharacterDetails
            name={card.name}
            key={Date.now() + Math.random()}
            />
    ))

    return (
        <div>
            {card}
        </div>
    )


}

export default Character