import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Sidebar from './Sidebar'
import CardSection from './CardSection'
import LabelSet from './LabelSet'
import BoxGroup from './BoxGroup'
function App() {

  return (
    <div className="overflow-hidden">
      <LabelSet/>
      <CardSection className = 'ml-[20px]'/>
      <BoxGroup/>

    </div>
  )
}

export default App
