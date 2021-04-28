import React, { useState } from 'react';
import fetchAxios from '../actions/fetchAxios';

const PokemonAxios = () => {
    const [items, setItems] = useState([]);


    const getPokemon = async () => {
        try{
            const arr = await fetchAxios();
            setItems(arr);
        } catch (err) {
            alert(err);
        }
    }

    const listItems = items.map((name, key) => <li key={key}>{name}</li>);

    return (
        <section className="pokemon-section">
            <h1>Pokemon API con Axios</h1>
            <button onClick={getPokemon}>No Botón Necesario con useEffect</button>
            <ul>{listItems}</ul>
        </section>
    );
};

export default PokemonAxios;