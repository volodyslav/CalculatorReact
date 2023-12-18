import { useState } from "react"


function App() {
  const [number, setNumber] = useState(0)
  return (
    <main className="min-h-screen flex justify-center items-center ">
      <div className=" shadow-2xl shadow-black flex justify-center  flex-col bg-yellow-500 p-4 rounded-xl border-blue-500 border-2">
        <div >
          <input onChange={(e)=>setNumber(e.target.value)} value={number} disabled className="  bg-white text-right text-2xl ring-2 ring-blue-500 p-4  rounded-lg my-10 w-full "/>
        </div>
        <div className=" grid grid-cols-4 gap-4 p-4 shadow-4xl rounded-2xl ">
          <button onClick={() => setNumber(number + "+")} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">+</button>
          <button onClick={() => setNumber(number + "-")} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">-</button>
          <button onClick={() => setNumber(number + "/")} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">/</button>
          <button onClick={() => setNumber(number + "*")} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">*</button>
          <button onClick={() => setNumber(number + 1)} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">1</button>
          <button onClick={() => setNumber(number + 2)} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">2</button>
          <button onClick={() => setNumber(number + 3)} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">3</button>
          <button onClick={() => setNumber(eval(number))} className=" text-4xl row-span-2 bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">=</button>
          <button onClick={() => setNumber(number + 4)} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">4</button>
          <button onClick={() => setNumber(number + 5)} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">5</button>
          <button onClick={() => setNumber(number + 6)} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">6</button>
          <button onClick={() => setNumber(number + 7)} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">7</button>
          <button onClick={() => setNumber(number + 8)} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">8</button>
          <button onClick={() => setNumber(number + 9)} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">9</button>
          <button onClick={() => setNumber("")} className=" text-2xl  bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">CE</button>
          <button onClick={() => setNumber(number + 0)} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">0</button>
          <button onClick={() => setNumber(number**0.5)} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">√</button>
          <button onClick={() => setNumber(number**2)} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">x²</button>

          <button onClick={() => setNumber(number.toString().slice(0, -1))} className="text-2xl bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">C</button>
          
        </div>
      </div>
    </main>
  )
}

export default App
