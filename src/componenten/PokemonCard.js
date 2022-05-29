import {useEffect, useState} from "react";
import axios from "axios";

function PokemonCard ({ name }) {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        async function getPokemon(){
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
                setPokemon(result.data);
            } catch(e) {
                console.error(e);
            }
        }
        getPokemon();
    }, []);

    return (
        <>
            <h1>{pokemon.name}</h1>
            <p>{pokemon.weight}</p>
            <img src={pokemon.sprites.front_default}/>
        </>

    );
}

export default PokemonCard;