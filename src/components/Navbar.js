import React,{ useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import logo from '../assets/logo.png'
import Contact from '../assets/contact.png'
// import Menu from '../assets/menu.png'

function Navbar() {
  const [showMenu, setshowMenu] = useState(false)
  return (
    <nav className="navbar"> 
    <div className="logo">
    <img src={logo} alt="logo" className="logo"></img>
    </div>

    <div className="nav-links">
        <Link activeClass="active" to='home' spy ={true} smooth = {true} offset={-50} duration={500} className="nav-links-item">Home</Link> 
        <Link activeClass="active" to='abouts' spy ={true} smooth = {true} offset={-100} duration={500} className="nav-links-item">Streetwear</Link>
        <Link activeClass="active" to='contact' spy ={true} smooth = {true} offset={-50} duration={500} className="nav-links-item">Summer</Link>
        <Link activeClass="active" to='Project' spy ={true} smooth = {true} offset={-50} duration={500} className="nav-links-item">Oversized</Link>
        <Link activeClass="active" to='contact' spy ={true} smooth = {true} offset={-50} duration={500} className="nav-links-item">Casuals</Link>
        <button class = "btn" onClick={()=> {document.getElementById('reach').scrollIntoView({behavior:'smooth'})}}><img  className="btnImg" src={Contact} alt='Contact Me'/>Login/Sign-up</button>

    </div>

    <img src ="#" alt = "menu" className= "mobMenu" onClick={()=> setshowMenu(!showMenu)} />
    
    <div className="navMenu" style={{display:showMenu ? 'flex':'none'}}>

        <Link activeClass="active" to='nav' spy ={true} smooth = {true} offset={-100} duration={500} className="Menu-item" onClick={() => setshowMenu(false)}>Home</Link> 
        <Link activeClass="active" to='about' spy ={true} smooth = {true} offset={-50} duration={500} className="Menu-item" onClick={() => setshowMenu(false)}>About</Link>
        <Link activeClass="active" to='Project' spy ={true} smooth = {true} offset={-50} duration={500} className="Menu-item" onClick={() => setshowMenu(false)}>Project</Link>
        <Link activeClass="active" to='socials' spy ={true} smooth = {true} offset={-50} duration={500} className="Menu-item" onClick={() => setshowMenu(false)}>Socials</Link>
        <Link activeClass="active" to='reach' spy ={true} smooth = {true} offset={-50} duration={500} className="Menu-item" onClick={() => setshowMenu(false)}>Contact Me</Link>
    </div>
    
    </nav>  
  )
}
export default Navbar