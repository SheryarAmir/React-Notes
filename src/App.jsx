import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Login from './Components/Login'
import About from './Components/About'
import Product from './Components/Product'
import Grid from "./Components/Grid"
import Technology from "./Components/Technology"
import Client from './Components/Client'
 import Benefits from './Components/Benefits'
 import Footer from './Components/Footer'
function App() {

  return (
    <>
  
   <BrowserRouter>
   <Navbar/>
   <Product/>
   <Grid/>
   <Technology/>
   <Client/>
    <Benefits/>
  <Footer/>
   <Routes>
   
    <Route  path="home"  element= {<Home/>} />

    <Route  path="/about"  element= {<About/>} />

    <Route  path="/Login"  element= {<Login/>} />

   </Routes>
   </BrowserRouter>

    </>
  )
}

export default App
