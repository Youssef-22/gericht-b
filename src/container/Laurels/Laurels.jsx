import React from 'react';
import { SubHeading } from '../../components';
import { images , data} from '../../constants';

import './Laurels.css';
const AwardCard = ({props}) =>(
  <div className='award-card'>
    <img src={props.imgUrl}/>
    <div className='award-card-info'>
        <p className='p__cormorant' style={{color:'#DCCA87'}} >{props.title}</p>
        <p className='p__cormorant'>{props.subtitle}</p>
    </div>
  </div>
)


const Laurels = () => (
  <div className='awards app__bg section__padding flex__center' id='awards'>
   <div className='award-info'>
      <SubHeading title="Awards & Recognition"/>
      <h1 className='headtext__cormorant'>Our Laurels</h1>
      <div className='app-awards'>
        {data.awards.map(award => <AwardCard props={award} key={award.title}/>

        )}
      </div>

   </div>
   <div className='right'>
        <img src={images.laurels} alt="laurels"/>
   </div>
  </div>
);

export default Laurels;
