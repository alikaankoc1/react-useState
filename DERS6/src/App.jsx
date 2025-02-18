import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// useState kavramı bir nevi değişken tanımlamadır.
function App() {
  // const [firstName, setfirstName] = useState("Ali")
  // const [lastName, setLastname] = useState("Kaan")

  // const changeHandle = () =>{
  //   setfirstName("şampiyon")
  //   setLastname("konya")
  // }

  const [count, setCount ] = useState(0);
  
  const arttir = () =>{
    setCount(count +1)
  }
  const azalt = () =>{
    if(count > 0){
      setCount(count -1)
    }
    
  }
  console.log("component render edildi")
  

  return(
    <div>
{/* <div>{firstName} {lastName}</div>

<div><button onClick={changeHandle}>Değiştir bro</button></div> */}
  
  <div>{count}</div>

  <div><button onClick={arttir}>Değeri 1 arttır. </button></div>
  <div><button onClick={azalt}>Değeri 1 azalt</button></div>


    </div>
    
  )
}

export default App
