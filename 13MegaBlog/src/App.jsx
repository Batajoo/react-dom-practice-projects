import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  console.log(import.meta.env.VITE_ARPWRITE_URL);
  return (
    <>
      Hi world
    </>
  )
}

export default App
