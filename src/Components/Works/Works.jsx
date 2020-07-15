import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import apiUrl from '../../apiConfig'
import './works.scss'

function Works(props) {
    console.log('Works - props', props)
    console.log(apiUrl)

  const [projects, setProjects] = useState([]);

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
    <li key={item._id}>
        <h2>{item.name}</h2>
      <Link to={`/works/${item._id}`}>More Info...</Link>
    </li>
  ));
    
  return (
    <div className='home-flex'>
       <h1>Projects</h1>
      <ul>{projectsArr}</ul>
      <Link to={'/create-project'}>
      <button className='add-project'>Add Project</button>
      </Link>
    </div>
  );
}

export default Works;
