import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './components/aboutus/About'

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}> </Route>
          <Route path='/about' element={<AboutUs/>}> </Route>
       </Routes>
    </div>
  )
}

export default App
