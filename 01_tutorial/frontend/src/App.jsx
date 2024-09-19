import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EventProps from './components/EventProps'
import Home from './home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <EventProps />
      <Home />
    </div>
  )
}

export default App
