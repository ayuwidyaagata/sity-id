import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div id='main'>
        <Navbar/>
        <div className='name'>
            <h1><span>Miliki produk</span></h1>
            <h1>Smart Electricity, Smart Economy</h1>
            <p className="details">
            Satu-satunya alat penghemat listrik yang dapat melakukan controlling, manajemen dan monitoring perangkat 
            listrik secara realtime. Dengan adanya mode kontrol, pengguaan listrik menjadi lebih tersruktur, sehingga dapat mengemat pembayaran listrik.
            </p>
            <a href="#" className='cv-btn'>Beli</a>
        </div>
    </div>
  )
}

export default Header