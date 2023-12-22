import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
function App() {
const [jokes,setjokes]= useState([])
useEffect(()=>{
  axios.get('/api/jokes')
  .then((res)=>{
    setjokes(res.data);
  })
  .catch((e)=>{
    console.log(e);
  })
})

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h2>  Basic Project of FullStack    </h2>
<p>  Jokes:{jokes.length}  </p>

{
  jokes.map((joke,index)=>(
    <div key={joke.id}>
      <h3>{joke.title}</h3>
      <p> {joke.content} </p>
    </div>
  ))
}
    </>
  )
}

export default App
