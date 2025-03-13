import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

const App = () => {
  return (
    <div className='app'>
    <div className="container">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
    </div>
   
  </div>
  )
}

export default App
