import { useState } from "react"

function App() {
  const [color, setColor] = useState("bg-blue-600");

  return (
    <>
      <div className={`w-full h-screen duration-200 ${color}`}>color change 
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
         <div className="flex flex-wrap justify-content gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none bg-red-600" onClick={()=>setColor("bg-red-600")}>Red</button>
            <button className="outline-none bg-green-600" onClick={()=>setColor("bg-green-600")}>Green</button>
            <button className="outline-none bg-blue-600" onClick={()=>setColor("bg-blue-600")}>Blue</button>
            <button className="outline-none bg-yellow-600" onClick={()=>setColor("bg-yellow-600")}>Yellow</button>
            <button className="outline-none bg-purple-600" onClick={()=>setColor("bg-purple-600")}>Purple</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
