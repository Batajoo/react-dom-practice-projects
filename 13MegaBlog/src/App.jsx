import { useState } from 'react'
import { useDispatch } from 'react-redux';

// new function 
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  return (
    <>
      Hi world
    </>
  )
}

export default App
