import React from 'react';
import { meal } from '../../constants';
import {images}  from '../../constants';
import './Intro.css'; 

function Intro(){
  const [toggle,settoggle] = React.useState(false);
  function change(){
    settoggle(prev => !prev);
    if(toggle){
      vidRef.current.pause();
    }else{
      vidRef.current.play();
    }
  } 
  const vidRef = React.useRef()
  return (
<div className='app__video' id='intro'>
    <video 
    src={meal}
    type = "video/mp4"
    ref={vidRef}
    loop
    muted
    controls={false} 
    />
    <div className='play-btn flex__center ' onClick={change}>
        <img src={toggle ? images.pause : images.play}/>
    </div>
  </div>
  )
} 

export default Intro;
