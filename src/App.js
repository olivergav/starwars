import './App.css';
import {useState} from "react";
import dummyData from "./dummy-data";
import {CharacterList} from "./components/CharacterList";


function App() {
    const [characters, setCharacters] = useState(dummyData);



  return (
    <div className="App">
      <header>
        <h1>Star Wars Characters</h1>
      </header>
        <main>
            <section>
                {/*    star wars characters */}
                <CharacterList characters={characters}/>
            </section>
        </main>
    </div>
  );
}

export default App;
