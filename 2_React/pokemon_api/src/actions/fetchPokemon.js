const fetchPokemon = () => 
        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807')
         .then(res => res.json())
         .then(data => data.results.map(({ name }) => name))
         .catch(err => err);


export default fetchPokemon;