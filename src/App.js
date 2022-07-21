 import React from 'react'
 import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from './componenets/About/About'
import Contact from './componenets/Contact/Contact'
import Home from './componenets/Home/Home'
import Navbar from './componenets/Navbar/Navbar'
import Product from './componenets/Products/Product'
import Service from './componenets/Service/Service'
  
 
 const App = () => {
   return (
      <>
    
     <div className='main-section'>

      <BrowserRouter>
     <Navbar/>
     <div className='routes-part'>
     <Routes  >
     <Route path={`/`} element={<Home/>}/>
     <Route path={`/about`} element={<About/>}/>
     <Route path={`/contact`} element={<Contact/>}/>
     <Route path={`/service`} element={<Service/>}/>
     <Route path={`/product`} element={<Product/>}/>
     
     </Routes>
     </div>
      
      </BrowserRouter>
      </div>
      </>
     
   )
 }
 
 export default App