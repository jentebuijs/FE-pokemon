import {useEffect, useState} from "react";
import axios from "axios";
import './PokemonCard.css';

function PokemonCard({name}) {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        async function getPokemon() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
                setPokemon(result.data);
                console.log(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        getPokemon();
    }, []);

    return (
        <div className="pokemon-card">
        {Object.keys(pokemon).length > 0 &&
                <>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    <p><strong>Moves: </strong>{pokemon.moves.length}</p>
                    <p><strong>Weight: </strong>{pokemon.weight}</p>
                    <p><strong>Abilities: </strong>
                        {pokemon.abilities.map((ability) => {
                            return <li key={ability.ability.name}>{ability.ability.name}</li>
                        })}
                    </p>
                </>
        }
        </div>
    );
}

export default PokemonCard;