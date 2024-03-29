import React from 'react'
import { Link } from "react-router-dom"


const Header = () => {
  return (
    <header>
      <section className='container'>
        <nav className='navbar'>
            <h1>Tawwr Blog</h1>
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/create' className='btn'>New Post</Link>
            </div>
        </nav>
      </section>
       
    </header>
    
  )
}

export default Header