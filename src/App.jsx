

// import {Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import Watch from './Pages/Watch'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watch' element={<Watch/>}/>
      
    </Routes>
    <Footer/>


  
 
    </>
  )
}

export default App
