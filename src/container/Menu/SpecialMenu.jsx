import React from 'react';
import {images , data } from "../../constants"
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='special-menu flex__center section__padding' id='menu'>
      <div className='special-menu-title'>
          <SubHeading title="Menu that fits your palatte" styles={{
            fontWeight : "700",
            fontFamily:"Comorant Upright",
            fontZize: "23px",
            lineHeight:"130%",
            color:"white"
          }}
          />
          <h1 className='headtext__comorant'>Today's Special</h1>
      </div>
      <div className='special-menu-menu'>
          <div className='wine-section flex__center'>
            <p className='special-heading heading__comorant'>Wine & Beer</p>
            <div className='wine-items'>
                {data.wines.map((wine,index) => (
                  <div className='wine-table'>
                  <div className='up flex__center'>
                    <p>{wine.title}</p>
                    <div></div>
                    <h3>{wine.price}</h3>
                  </div>
                  <div className='down'>
                  <h3>{wine.tags}</h3>
                  </div>
                  </div>
                ))}
            </div>
          </div>
          <div className='menu-img'>
                  <img src={images.menu}/>
          </div>
          <div className='coctail-section flex__center'>
            <p className='special-heading'>Cocktails</p>
            <div className='coctail-items'>
                {data.cocktails.map((cocktail,index) => (
                  <div className='cocktail-table'>
                  <div className='up flex__center'>
                    <p>{cocktail.title}</p>
                    <div></div>
                    <p>{cocktail.price}</p>
                  </div>
                  <div className='down'>
                  <h3>{cocktail.tags}</h3>
                  </div>
                  </div>
                ))}
            </div>
          </div>
      </div>
      <div style={{marginTop : '15px'}}>
                <button className='custom__button' type='button'>View More</button>
      </div>
  </div>
);

export default SpecialMenu;
