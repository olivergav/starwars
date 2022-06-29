import './App.css';
import {useEffect, useState} from "react";
import dummyData from "./dummy-data";
import {CharacterList} from "./components/CharacterList";
import {endpoint} from "./components/endpoint";


function App() {
    const [characters, setCharacters] = useState(dummyData);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        console.log('Fetching');

        setLoading(true);
        setError(null);
        setCharacters([]);

        fetch(`${endpoint}/characters`)
            .then((response) => response.json())
            .then((response) => {
                setCharacters(response.characters);
            })
            .catch((error) => {
                setError(error);
            }).finally(() => {
                setLoading(false);
            })
    }, [])


    return (
        <div className="App">
            <header>
                <h1>Star Wars Characters</h1>
            </header>
            <main>
                <section>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <CharacterList characters={characters}/>
                    )}
                </section>
                {error && <p>{error.message}</p>}
            </main>
        </div>
    );
}

export default App;
