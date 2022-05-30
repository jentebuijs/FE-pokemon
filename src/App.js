import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import PokemonCard from "./componenten/PokemonCard";

function App() {
    const [selection, setSelection] = useState([]);
    const [endpoint, setEndpoint] = useState('https://pokeapi.co/api/v2/pokemon');

    useEffect(() => {
        async function getSelection() {
            try {
                const result = await axios.get(`${endpoint}`);
                setSelection(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        getSelection();
    }, [endpoint]);

    return (
        <>
            <div className="pokemon-selection">
                {selection.results && selection.results.map((pokemon) => {
                    return <PokemonCard name={pokemon.name} key={pokemon.name}/>
                })}
            </div>
            <div className="buttons">
                <button
                    type="button"
                    disabled={!selection.previous}
                    onClick={() => setEndpoint(selection.previous)}
                >Previous
                </button>
                <button
                    type="button"
                    disabled={!selection.next}
                    onClick={() => setEndpoint(selection.next)}
                >Next
                </button>
            </div>
        </>
    );
}

export default App;
