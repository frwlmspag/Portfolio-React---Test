import './navbar.css'
import cclogo from '../../assets/cclogo.png'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate()
  
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="navbar">
      <div className="nav-menu">
        <div className="cclogo">
          <img onClick={() => navigate('/')} src={cclogo}/>
        </div>
        <div onClick={() => {setMenuOpen(!menuOpen);}} className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? 'open' : ''}>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="work">Work</NavLink>
          </li>
          <li className='hiremeBtn' >
            <NavLink to="hireme">Hire Me!</NavLink>
          </li>
        
        </ul>
      </div>
  </div>
  )
}

export default Navbar