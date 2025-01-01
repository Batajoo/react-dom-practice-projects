import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);
  
  const removeValue = () => {
    if(counter > 0) setCounter(counter -= 1);
  };

  const addValue = () => {
    if(counter < 20){
      console.log("click", Math.random());
    counter++;
    setCounter(counter);
    console.log(counter);}
  }
  return (
    <>
      <h1>chai and react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <p>{counter}</p>
      <br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
