import React from 'react';
import "./guide.css";
import Nav from '../Navbar/Nav';
import image1 from './guide screenshots/Screenshot 2024-01-30 075631.png';
import image2 from './guide screenshots/Screenshot 2024-01-30 080047.png';
import image3 from './guide screenshots/form delete.png';
import image4 from './guide screenshots/form deleted.png';
import image5 from './guide screenshots/form submit.png';
import image6 from './guide screenshots/form submitted.png';

function Guide() {
  return (
    <div>
      <Nav />
      <div className='content'>
        <img className='image1' src={image1} alt='guide1-image' />
        <img className='image2' src={image2} alt='guide2-image' />
        <img className='image3' src={image3} alt='guide3-image' />
        <img className='image4' src={image4} alt='guide4-image' />
        <img className='image5' src={image5} alt='guide5-image' />
        <img className='image6' src={image6} alt='guide6-image' />
      </div>
    </div>
  );
}

export default Guide;
