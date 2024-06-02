import React from 'react';
import "./guide.css";
import Nav from '../Navbar/Nav';
import image1 from './guide screenshots/Screenshot 2024-01-30 075631.png';
import image2 from './guide screenshots/Screenshot 2024-01-30 080047.png';
import image3 from './guide screenshots/form delete.png';
import image4 from './guide screenshots/guidePage.png';
import image5 from './guide screenshots/form submit.png';
import image6 from './guide screenshots/signOut.png';

function Guide() {
  return (
    <div>
      <Nav />
      <div className='content'>
        <div className='image-container'>
          <img className='image1' src={image1} alt='guide1-image' />
          <div className='gradient'>
            <p><span>Login :</span>  If you're an old user</p>
            <p><span>Register :</span>  If you're a new user</p>
          </div>
        </div>
        <div className='image-container'>
          <img className='image2' src={image2} alt='guide2-image' />
          <div className='gradient'>
            Home Page
          </div>
        </div>
        <div className='image-container'>
          <img className='image6' src={image6} alt='guide6-image' />
          <div className='gradient'>Fill the above form to add a new Task</div>
        </div>
        <div className='image-container'>
          <img className='image3' src={image3} alt='guide3-image' />
          <div className='gradient'><p><span>Delete :</span> To delete the chosen</p></div>
        </div>
        <div className='image-container'>
          <img className='image4' src={image4} alt='guide4-image' />
          <div className='gradient'>Navigated to the Guide page</div>
        </div>
        <div className='image-container'>
          <img className='image5' src={image6} alt='guide5-image' />
          <div className='gradient'><p><span>signOut :</span> Log you out of the site.</p></div>
        </div>
      </div>
    </div>
  );
}

export default Guide;
