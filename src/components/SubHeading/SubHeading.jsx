import React from 'react';
import images from '../../constants/images';
const SubHeading = (props) => (
  <div style={{marginBottom : "1rem" , color : "white"}}>
    <p style={props.styles}>{props.title}</p>
    <img src={images.spoon} alt='spoon' className='spoon'/>
  </div>
);

export default SubHeading;
