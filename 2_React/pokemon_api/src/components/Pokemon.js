import React, { useState } from 'react';
import fetchPokemon from '../actions/fetchPokemon';

const Pokemon = () => {
    
    const [ items, setItems] = useState([]);

    const onClick = () =>{
        fetchPokemon()
            .then((arr) => setItems(arr))
            .catch((err) => alert(err));
    }
    
    const listItems = items.map((name, key) => <li key={key}>{name}</li>)
    
    return (
        <section>
            <h1>Pokemon</h1>
            <button onClick={onClick}>Fetch Pokemon</button>
            <ul>{listItems}</ul>
        </section>
    );
}

export default Pokemon;
