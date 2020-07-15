import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import apiUrl from '../../apiConfig'
import './works.scss'
import styled, { withTheme } from 'styled-components';
import { backgroundColor, textColor, liBackgroundColor } from '../theme';

function Works(props) {


  const [projects, setProjects] = useState([]);

  const Button = styled.button`
    background: ${backgroundColor};
    color: ${textColor};
    `;

    const LI = styled.li`
        background: ${liBackgroundColor};
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
    <LI key={item._id}>
        <h2>{item.name}</h2>
      <Link to={`/works/${item._id}`}>More Info...</Link>
    </LI>
  ));
    
  return (
    <div className='home-flex'>
       <h1>Projects</h1>
      <ul>{projectsArr}</ul>
      <Link to={'/create-project'}>
      <Button className='add-project'>Add Project</Button>
      </Link>
    </div>
  );
}

export default withTheme(Works);
