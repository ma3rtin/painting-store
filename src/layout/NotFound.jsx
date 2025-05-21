import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/static/Footer'

function NotFound() {
  return (
    <div className='not-found'>
      <h1>404</h1>
      <Link to="/" ><button>Home</button></Link>
      <Footer />
    </div>
  )
}

export default NotFound
