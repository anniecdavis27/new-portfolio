import React from 'react';
import './contact.scss'

function Socials() {
    
  return (
    <div className='socials-flex'>
        <a href='https://twitter.com/anniecdavis27'><img src='https://live.staticflickr.com/65535/50133425996_b9c3a367ee_o.png' alt='twitter' className='social-img'></img></a>
        <a href='https://www.linkedin.com/in/anniecdavis27/'><img src='https://live.staticflickr.com/65535/50133426006_ed6122c669_o.png' alt='linkedin' className='social-img'></img></a>
        <a href='https://www.instagram.com/anniechasedavis/'><img src='https://live.staticflickr.com/65535/50133651917_9cc71eecd5_o.png' alt='instagram' className='social-img'></img></a>
        <a href='https://github.com/anniecdavis27'><img src='https://live.staticflickr.com/65535/50133452891_1c55ef446c_o.png' alt='github' className='social-img'></img></a>
    </div>
  );
}

export default Socials;