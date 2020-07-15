import React, {useState} from 'react';
import './home.scss'
import styled, { withTheme } from 'styled-components';
import { backgroundColor, textColor } from '../theme';

function Home(props) {
    const themeToggle = props.themeToggle

    const Button = styled.button`
    background: ${backgroundColor};
    color: ${textColor};

    `;

    const [buttonStatus, setButtonStatus] = useState(false)

    const handleThemeToggle = (e) => {
        if(buttonStatus === false) {
            setButtonStatus(true)

         } else {
            setButtonStatus(false)

         }
    }

  return (
    <div className='home-flex'>
        <div>
        <div className="animation-wrapper">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
        </div>

            <h1>Annie Chase Davis</h1>
            <h3>
                Front-End/UI<br />
                Engineer
            </h3>
        </div>
        <Button onClick={() => themeToggle.toggle()} className='dark-toggle'>{!buttonStatus ? 'Light Mode' : 'Dark Mode'}</Button>
    </div>
  );
}

export default withTheme(Home);
