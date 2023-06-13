import { useState } from 'react';
import './App.css';
import PlayerCharacter from './PlayerCharacter';
import axios from 'axios';


function App() {
  const [count, setCount] = useState(2);
  const [playerCharacters, setPlayerCharacters] = useState([<PlayerCharacter name={'PlayerCharacter1'}/>]);

  // for requirement 8 - complete for all the working requirements above it
  const handleAdd = () => {
    setCount(count + 1);
    const playerCharacterName = 'PlayerCharacter' + count;
    setPlayerCharacters(playerCharacters.concat(<PlayerCharacter name={playerCharacterName}/>));
  }
  
  // for requirement 6 - has circular reference error, pretty sure it's in the PlayerCharacter component and is being caused by Skills component
  // need to debug
  const handleSave = () => {
    // improve this to be able to handle multiple different sets of characters
    let requestURL = 'https://recruiting.verylongdomaintotestwith.ca/api/{tangi9}/character';
    axios.post(requestURL, playerCharacters, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log('All characters saved successfully: ', response.data)
    }).catch((error) => {
      console.error('Error in saving characters: ', error);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise - Tangeena Islam</h1>
      </header>
      <div className='Character-menu'>
        <button onClick={handleAdd}>Add New Character</button>
        <button onClick={() => window.location.reload()}>Reset All Characters</button>
        <button onClick={handleSave}>Save All Characters</button>
      </div>
      <div className='Characters-list'>
        {playerCharacters}
      </div>         
    </div>
  );
}

export default App;