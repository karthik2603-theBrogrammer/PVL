import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import App2 from './App2'
import Home from './Home'
import Sidebar from './Sidebar'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <Sidebar/>

      <Routes>
        <Route path='/' exact element = {<Home/>}/>
        <Route path='/q1' exact element = {<App2/>}/>
        <Route path='/q2' exact element = {<App/>}/>


      </Routes>
    </Router>
    
  </React.StrictMode>,
)
