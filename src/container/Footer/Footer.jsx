import React from 'react';
import { images } from '../../constants';
import SubHeading from '../../components';
import { FooterOverlay , Newsletter  } from '../../components';
import './Footer.css';
const Footer = () => (
  <div className='footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='footer-links'>
        <div className='contact'>
            <h1 className='headtext__cormorant' style={{fontSize:"40px"}}>Contact Us</h1>
            <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
            <p className='p__opensans'>+1 212-344-1230</p>
            <p className='p__opensans'>+1 212-555-1230</p>
        </div>
        <div className='footer-social'>
          <img src={images.gericht} alt='footer-logo'/>
          <p className='p__opensans'>
          "The best way to find yourself is to lose
           yourself in the service of others.”
          </p>
          <img src={images.spoon} className="spoon-img" style={{marginTop:"1rem"}}/>
          <div className='social-links'>
            <img src={images.facebook}/>
            <img src={images.instagram}/>
            <img src={images.twitter}/>
          </div>

        </div>
        <div className='working-hours'>
        <h1 className='headtext__cormorant' style={{fontSize:"40px"}} >Working Hours</h1>
            <p className='p__opensans'>Monday - Friday:</p>
            <p className='p__opensans'>08:00 am -12:00 am</p>
            <p className='p__opensans'>Saturday-Sunday:</p>
            <p className='p__opensans'>07:00am -11:00 pm</p>
        </div>
    </div>
    <div className='footer-copyright' style={{zIndex:"2",marginTop : "3rem"}}>
      <p className='p__opensans'>2021 Gerícht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
