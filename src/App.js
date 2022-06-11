import React, { useState } from 'react';
import MoleConntainer from './components/MoleContainer';
import './App.css';

function App() {
  let [score, setScore] = useState(0);

  const createMoleHill = () => {
    let hills = [];

    for (let i = 0; i < 9; i++) {
      hills.push(
        <MoleConntainer 
          key={i}
          className={`mole mole-${i}`}
          score={score}
          setScore={setScore}
        />
      )
    }

    return (
      <div>
        {hills}
      </div>
    )
  }

  return (
    <div className="App">
      <h1>React-a-Mole!</h1>
      {score}
      {createMoleHill()}
    </div>
  );
}

export default App;
