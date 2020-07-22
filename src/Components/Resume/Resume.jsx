import React from "react";
import './resume.scss'
import styled, { withTheme } from 'styled-components';
import { backgroundColor, textColor } from '../theme';

function Resume() {

  const Button = styled.button`
    background: ${backgroundColor};
    color: ${textColor};

    `;
  
  return (
    <div className="home-flex-resume">
      <h1 className="title">Resume</h1>
      <div className="resume-flex">
        <div className='skills-section'>
          <h2 className='resume-section'>Skills</h2>

          <ul class='skills-list'>
            <li className='skills-list-item'>HTML</li>
            <li className='skills-list-item'>CSS/SCSS</li>
            <li className='skills-list-item'>JavaScript</li>
            <li className='skills-list-item'>React.js</li>
            <li className='skills-list-item'>Redux</li>
            <li className='skills-list-item'>Node.js</li>
            <li className='skills-list-item'>Ruby/Rails</li>
            <li className='skills-list-item'>Express</li>
            <li className='skills-list-item'>MongoDB</li>
            <li className='skills-list-item'>Sketch</li>
            <li className='skills-list-item'>SQL</li>
            <li className='skills-list-item'>Express</li>
            <li className='skills-list-item'>Framer</li>
            <li className='skills-list-item'>Bootstrap/React Bootstrap</li>
            <li className='skills-list-item'>Firebase</li>
            <li className='skills-list-item'>Heroku</li>
            <li className='skills-list-item'>Surge</li>
            <li className='skills-list-item'>Netlify</li>
            <li className='skills-list-item'>GoDaddy</li>
            <li className='skills-list-item'>JQuery</li>
            <li className='skills-list-item'>Responsive Design</li>


          </ul>
        </div>
        <div className='experience-section'>
          <h2 className='resume-section'>Experience</h2>
          <div className='experience'>
            <h3 className='exp-name'>Lawrence Harvey</h3>
            <h3 className='exp-loc'>New York, NY</h3>
            <h3 className='exp-title'>Senior Engineering Recruitment Consultant</h3>
          </div>
          <div className='experience'>
            <h3 className='exp-name'>Anheuser Busch</h3>
            <h3 className='exp-loc'>New York, NY</h3>
            <h3 className='exp-title'>Business Development Rep</h3>
          </div>
          <div className='experience'>
            <h3 className='exp-name'>Hamlyn Williams</h3>
            <h3 className='exp-loc'>New York, NY</h3>
            <h3 className='exp-title'>Recruitment Consultant</h3>
          </div>
        </div>
        <div className='education-section'>
          <h2 className='resume-section'>Education</h2>
          <h3 className='school'>General Assembly</h3>
          <h3 className='school-date'>May 2020 - August 2020</h3>
            <h3 className='course'>Software Engineering Immersive</h3>
            <br />
            <h3 className='school-date'>January 2020 - May 2020</h3>
            <h3 className='course'>React Development Intensive</h3>
            <br />
            <h3 className='school-date'>September 2019 - December 2019</h3>
            <h3 className='course'>JavaScript Development Intensive</h3>
            <br />
            <br />
          <h3 className='school'>UCLA Honors College</h3>
          <h3 className='school-date'>September 2014 - June 2017</h3>
            <h3 className='course'>Bachelor of Arts</h3>
            <br />
            <br />
          <h3 className='school'>Phillips Academy, Andover</h3>
            <br />
          <h3 className='school'>The Hotchkiss School</h3>

        </div>
        
      </div>
      <a href='https://drive.google.com/file/d/18n3TWH738JS3-KZImTKW6e37vOh9m9oi/view?usp=sharing' target='_blank' rel='noopener noreferrer' className='btn'><Button className='download-btn'>Download Resume</Button></a>
    </div>
  );
}

export default withTheme(Resume);
