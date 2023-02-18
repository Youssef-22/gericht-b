import React from 'react';
import images from "../../constants/images";
import './AboutUs.css';

function AboutUs(){
  return (
  <div className='about app__bg flex__center section__padding' id='about'>
    <div className='about-overlay flex__center '>
      <img src={images.G} alt="G"/>
    </div>
    <div className='about-content flex__center'>
       <div className='content-about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt="spoon" className='spoon__img'/>
          <p className='p__opensans'>
          Lorem ipsum dolor sit amet, consectetur adipiscing
           elit. Quis pharetra adipiscing ultrices vulputate posuere tristique.
           In sed odio nec aliquet eu proin mauris et.
          </p>
          <button type='button' className='custom__button'>Know More</button>
       </div>
        <div className='middle-content'>
            <img className='knife flex__center' src={images.knife} alt="knife"/>
        </div>
        <div className='content-history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt="spoon" className='spoon__img'/>
          <p className='p__opensans'>
          Adipiscing tempus ullamcorper lobortis odio tellus
           arcu volutpat. Risus placerat morbi volutpat
          habitasse interdum mi aliquam In sed odio nec aliquet.
          </p>
          <button type='button' className='custom__button'>Know More</button>
       </div>        
    </div>
  </div>
  )
}

export default AboutUs;
