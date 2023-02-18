import react from 'react';
import { SubHeading } from '../../components';
import {images } from '../../constants';

import './Gallery.css';

function Gallery(){
  const scrollRef = react.useRef(null);
  const Images = [images.gallery01,images.gallery02,images.gallery03,images.gallery04];
  function scroll(direction){
    const {current }= scrollRef;
    if(direction === "left"){
      current.scrollLeft -= 300;
    }else{
      current.scrollLeft +=300; 
    }
  }
  return(
    <div className='gallery flex__center' >
        <div className='gallery-content'>
            <SubHeading title="Instagram"/>
            <h1 className='headtext__cormorant'>Photo Gallery</h1>
            <p className='p__opensans' style={{color:"#AAA", marginTop : "2rem"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum 
            turpis elit elit scelerisque egestas mu.
            </p>
            <button type='button' className='custom__button'>View More</button>
        </div>
        <div className='gallery-imgs'>
            <div className='imgs-container' ref={scrollRef}>
              {Images.map((image,index) => (
                <div className='img-card flex__center' key={`Images-${index + 1}`}>
                      <img src={image} alt="gallery-image"/>
                      <img className='instagram-icon' src={images.instagram}/>
                </div>
              ))}
            </div>
            <div className='arrow-container'>
              <img src={images.arrowleft} onClick={()=> scroll("left")}/>
              <img src={images.arrowright} onClick={()=> scroll("right")}/>

            </div>
        </div>
    </div>
  )
}

export default Gallery;
