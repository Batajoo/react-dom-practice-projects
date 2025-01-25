import { useState } from 'react'
import Todos from './components/Todos'
import AddTodos from './components/AddTodos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddTodos/>
      <Todos/>
    </>
  )
}

export default App
