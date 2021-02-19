import React, {useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [character,setCharacter] = useState([]);
  useEffect(()=>
  {
    axios.get('https://swapi.dev/api/people/')
    .then(res => 
    {
      setCharacter(res.data);
      // console.log('res = ', res.data);
    })
  },[]);
  // console.log('char = ',character);
   return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character charInfo = {character} />
    </div>
  );
}

export default App;
