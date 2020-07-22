import React, { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from '../../apiConfig'
import './works.scss'
import styled, { withTheme } from 'styled-components';
import { liBackgroundColor, liTextColor } from '../theme';

function Works(props) {


  const [projects, setProjects] = useState([]);

    const LI = styled.li`
        background: ${liBackgroundColor};
        color: ${liTextColor};
    `

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(`${apiUrl}/works`);
        setProjects(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  console.log(projects)


  const projectsArr = projects.map((item) => (
    <LI key={item._id} className='project-li'>
        <h2 className='li-title'>{item.name}</h2>
        <p className="project-desc">{item.description}</p>
        <a href={item.urlLive} target='_blank' rel='noopener noreferrer'><button className='project-btn'>Live Site</button></a>
        <br />
        <a href={item.urlGit} target='_blank' rel='noopener noreferrer'><button className='project-btn'>Github Repository</button></a>
    </LI>
  ));
    
  return (
    <div className='works-flex'>
       <h1>Projects</h1>
      <ul className='works-flex-content'>{projectsArr}</ul>
    </div>
  );
}

export default withTheme(Works);
