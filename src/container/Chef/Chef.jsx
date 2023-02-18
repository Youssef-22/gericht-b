import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='chef section__padding app__wrapper app__bg' id='chef'>
    <div className='left'>
      <img src={images.chef}/>
    </div>
    <div className='right'>
      <SubHeading title="Chef's Word" styles={{
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "23px",
          lineHeight: "130%",
          letterSpacing: "0.04em",
          color: "#FFFFFF", 
      }}/>
      <h1>What we believe in</h1>
      <div className='quote'>
      <img src={images.quote} />
      <p>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat,
         aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
      </div>
      <div className='down'>
      <h2>Kevin Luo</h2>
      <h3>Chef & Founder</h3>
      <img className='sign' src={images.sign} alt="sign"/>
      </div>
    </div>
  </div>
);

export default Chef;
