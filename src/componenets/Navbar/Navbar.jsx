import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
    
  return (
    <>
     <div className='header'>
        <div className="menu-name">Navbar</div>
        <ul className='menu-list'>
            <li className='list-item'><Link to={'/'} >  Home</Link></li>
            <li className='list-item'><Link to={'/about'} >About</Link></li>
            <li className='list-item'><Link to={'/contact'} >Contact</Link></li>
            <li className='list-item'><Link to={'/service'} >Service</Link></li>
            <li className='list-item'><Link to={'/product'} >Product</Link></li>
        </ul>
        <div  className='menu-icon'><i className='fa fa-bars'></i></div>

     </div>
    
    </>
  )
}

export default Navbar