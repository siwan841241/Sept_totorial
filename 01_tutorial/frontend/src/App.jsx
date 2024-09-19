import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EventProps from './components/EventProps'
import Home from './home/Home'
import EventPropagation from './components/EventPropagation'
import State from './hooks/State'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <EventProps /> */}
      {/* <EventPropagation /> */}
      {/* <Home /> */}
      <State />
    </div>
  )
}

export default App
