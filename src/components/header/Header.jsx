import React from 'react'
import './header.scss'

function Header({setToggle, togle}) {
   
  return (
    <header className='header'>
        <div className='inner'>
            <h2 > 25 MATCHES <span className='header_span'>GAME</span></h2>
            <div className='header_rigth'>
                <label className="switch">
                    <input type="checkbox" onChange={() => {setToggle(!togle)}}/>
                    <span className="slider round"></span>
                </label>
                <span>AI info</span>
            </div>
        </div>
    </header>
  )
}

export default Header
