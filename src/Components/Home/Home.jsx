import React, {useState} from 'react';
import './home.scss'
import styled, { withTheme } from 'styled-components';
import { backgroundColor, textColor } from '../theme';

function Home(props) {
    console.log('home', props)
    const themeToggle = props.themeToggle

    const Button = styled.button`
    background: ${backgroundColor};
    color: ${textColor};

    `;

    const mode = props.theme.mode

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
        <Button onClick={() => themeToggle.toggle()} className='dark-toggle'>{mode === 'dark' ? 'Light Mode' : 'Dark Mode'}</Button>
    </div>
  );
}

export default withTheme(Home);
