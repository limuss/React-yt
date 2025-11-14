import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='Parent'>
      <div className="card">
        <img src="https://i.pinimg.com/736x/9e/c0/f8/9ec0f877571edc437f89c15c08081533.jpg" alt="" />
        <h1>Muslim Nazir Lone</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button className='glow-on-hover'>Check Me</button>
      </div>
     
      
    </div>
    </>
  )
}

export default App
