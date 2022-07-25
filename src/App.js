
import { useEffect } from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  useEffect( () => {
    fetch("https://api.frontendexpert.io/api/fe/wordle-words")
    .then( (res) => res.json())
    .then( (data) => {
      console.log(data);
    })
  })

  return (
   <>
  <h1>Wordle</h1>
  <Board/>
   </>
  );
}

export default App;
