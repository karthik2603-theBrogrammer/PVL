import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Sidebar from './Sidebar'
import CardSection from './CardSection'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Sidebar/>
      <CardSection className = 'ml-[20px]'/>

    </div>
  )
}

export default App
