import react from 'react';
import './Navbar.css';
import images from "../../constants/images";

function Navbar(){
  const [toggle , settoggle ] = react.useState(false);
  function change(){
    settoggle(prev => !prev);
  }
  return (
    <nav className='navbar'>
    <div className='nav-logo'>
          <img src={images.gericht} alt=""app-logo/>
    </div>
    <ul className='list'>
      <li className='list-items'><a href='#home'>Home</a></li>
      <li className='list-items'><a href=' #about'>About</a></li>
      <li className='list-items'><a href='#menu'>Menu</a></li>
      <li className='list-items'><a href='#awards'>Awards</a></li>
      <li className='list-items'><a href='#contacts'>Contacts</a></li>
    </ul>
    <div className='login'>
      <a href='#login' className='login-text'>Login | Register</a>
      <div></div>
      <a className='login-text'>Book Table</a>
    </div>
    <div className='small-screen'>
      <img  src={toggle ? images.close : images.hamburger} className="menu" onClick={change}/>
      {toggle && <div className='table'>
      <ul className='list'>
      <li className='list-items'><a href='#home' onClick={change}>Home</a></li>
      <li className='list-items'><a href=' #about' onClick={change}>About</a></li>
      <li className='list-items'><a href='#menu' onClick={change}>Menu</a></li>
      <li className='list-items'><a href='#awards' onClick={change}>Awards</a></li>
      <li className='list-items'><a href='#contacts' onClick={change}>Contacts</a></li>
    </ul>
    </div>}
    </div>
  </nav>
  )
}
  
export default Navbar;
