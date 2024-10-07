import React from 'react'
import Home from './Components/Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login'
import Sign from './Components/Sign'
import  { Toaster } from 'react-hot-toast';
const App = () => {
  return (
   
    <BrowserRouter>
    <Toaster/>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Sign/>}/>
      </Routes>
    </div>
    </BrowserRouter>
   
  )
}

export default App