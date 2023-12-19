import { useState } from "react"


function App() {
  const [number, setNumber] = useState("")
  const handleActions = (value) => {
    try{
      if(value === "CE"){
        setNumber("")
      }else if(value === "C"){
        setNumber(number.toString().slice(0, -1))
      }else if(value === "="){
        setNumber(eval(number).toString())
      
      }else if(value === "√"){
        setNumber((parseFloat(number)**0.5).toString())
      }else if(value === "x²"){
        setNumber((parseFloat(number)**2).toString())
      }else if(value === "cos"){
        setNumber(parseFloat(Math.cos(number)).toString())
      }else if(value === "sin"){
        setNumber(parseFloat(Math.sin(number)).toString())
      }else if(value === "tg"){
        setNumber(parseFloat(Math.tan(number)).toString())
      }else if(value === "atg"){
        setNumber(parseFloat(Math.atan(number)).toString())
      }else if(value === "log10"){
        setNumber(parseFloat(Math.log10(number)).toString())
      }

      else{
        if(number.length < 25){
          setNumber(number + value)
          
        }
      }
        
      }catch(err){
        setNumber("Error")
        console.log(err)
      }
  }

  console.log(number.length)
 

  return (
    <main className="min-h-screen flex justify-center items-center ">
      <div className=" w-1/3 shadow-2xl shadow-black flex justify-center  flex-col bg-yellow-500 p-6 rounded-xl border-blue-500 border-2">
        <div >

          <div disabled className="  bg-white text-right text-2xl ring-2 ring-blue-500 p-4  rounded-lg my-10 w-full h-14 ">{number}</div>
        </div>
        <div className=" grid grid-cols-4 gap-4 p-4 shadow-4xl rounded-2xl ">
          <button onClick={() => handleActions("√")} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">√</button>
          <button onClick={() => handleActions("x²")} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">x²</button>
          <button onClick={() =>  handleActions("+")} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">+</button>
          <button onClick={() => handleActions("-")} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">-</button>
          {number.length >= 1 ? (<button onClick={() => handleActions("/")} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">/</button>):(<button className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">/</button>)}
          {number.length >= 1 ? (<button onClick={() => handleActions("*")} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">*</button>):(<button className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">*</button>)}
          <button onClick={() => handleActions(".")} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">.</button>
          <button onClick={() => handleActions("sin")} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">sin</button>
          <button onClick={() => handleActions("cos")} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">cos</button>
          <button onClick={() => handleActions("tg")} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">tg</button>
          <button onClick={() => handleActions("atg")} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">atg</button>
          <button onClick={() => handleActions("log10")} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">log10</button>
          <button onClick={() => handleActions('1')} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">1</button>
          <button onClick={() => handleActions('2')} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">2</button>
          <button onClick={() => handleActions('3')} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">3</button>
          {number.length >= 1 ? (<button onClick={() => handleActions("=")} className=" text-4xl row-span-2 bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">=</button>):(<button className=" text-4xl row-span-2 bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">=</button>)}
          <button onClick={() => handleActions('4')} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">4</button>
          <button onClick={() => handleActions('5')} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">5</button>
          <button onClick={() => handleActions('6')} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">6</button>
          <button onClick={() => handleActions('7')} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">7</button>
          <button onClick={() => handleActions('8')} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">8</button>
          <button onClick={() => handleActions('9')} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">9</button>
          <button onClick={() => handleActions("CE")} className=" text-2xl row-span-2 bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">CE</button>
          <button onClick={() => handleActions('0')} className=" bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">0</button>
          

          <button onClick={() => handleActions("C")} className="text-2xl col-span-2 bg-blue-800 hover:bg-blue-500 text-white p-2 rounded-lg">C</button>
          
        </div>
      </div>
    </main>
  )
}

export default App
