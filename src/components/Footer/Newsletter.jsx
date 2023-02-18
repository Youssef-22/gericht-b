import React from 'react';
import SubHeading from '../SubHeading/SubHeading';

import './Newsletter.css';

const Newsletter = () => (
  <div className='newsletter'>
    <div className='news-heading'>
        <SubHeading title="Newsletter"/>
        <h1 className='headtext__cormorant'>Subscribe To Our Newsletter</h1>
        <p className='p__opensans'>And never Miss Latest Updates</p>
    </div>
    <div className='news-input'>
      <input type="email" placeholder='Enter your Email' />
      <button className='custom__button'> Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
