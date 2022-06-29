import './App.css';
import {useState} from "react";
import dummyData from "./dummy-data";

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
            </section>
        </main>
    </div>
  );
}

export default App;
