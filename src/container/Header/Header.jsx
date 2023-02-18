import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';
import './Header.css';

const Header = () => (
  <div className='header' id='Home'>
    <div className='header-info'>
      <SubHeading title="Chase the new flavour" 
                  styles={{marginBottom : "1rem",color : "#fff", fontSize : "21px"}}
      />
      <h1>The Key To Fine Dining</h1>
      <p className='header-para' style={{margin: "2rem 0"}}>
      Sit tellus lobortis sed senectus vivamus molestie.
       Condimentum volutpat morbi facilisis quam scelerisque sapien.
       Et, penatibus aliquam amet tellus 
      </p>
      <button type='button' className='header-btn' >Explore Menu</button>
    </div>
    <div className='header-img'>
      <img src={images.welcome} alt="header-img" />
    </div>
  </div>
);

export default Header;
