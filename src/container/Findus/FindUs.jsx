import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './findus.css'
const FindUs = () => (
  <div className='findus section__padding flex__center app__bg' id='contacts'>
   <div className='left'>
    <SubHeading title="Contact"/>
    <h1 className='headtext__cormorant'>Find Us</h1>
    <p className='p__opensans' style={{marginTop:"4rem"}}>Lane Ends Bungalow,
     Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
     <p className='p__cormorant' style={{marginTop:"2rem" ,color:"#DCCA87"}}>Opening Hours</p>
     <p className='p__opensans' style={{marginTop:"1.3rem"}}>Mon - Fri: 10:00 am - 02:00 am</p>
     <p className='p__opensans' style={{marginTop:"1.3rem"}} >Sat - Sun: 10:00 am - 03:00 am</p>
     <button className='custom__button' style={{marginTop:"2rem"}}>Visit Us</button>
   </div>
   <div className='right'>
      <img src={images.findus}/>
   </div>
  </div>
);

export default FindUs;
