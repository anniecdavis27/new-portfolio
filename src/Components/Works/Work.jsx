import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Work = (props) =>  {
  const [project, setProject] = useState(null)
  const [isDeleted,setIsDeleted] = useState(false)

  console.log(props.match.params.id)

  useEffect(() => {
    const makeAPICall = async () => {
      try {
          const response = await axios(`${apiUrl}/works/${props.match.params.id}`)
          console.log('Item - response', response)
          setProject(response.data)
        } catch (err) {
          console.error(err)
        }
  
   }
    makeAPICall()
  }, [])

  console.log(project)

  const destroy = async () => {
    const response = await axios(
        {
      url: `${apiUrl}/works/${props.match.params.id}`,
      method: 'DELETE'
    }
    )
    setIsDeleted(true)
  }

    if (!project) {
      return <p>Loading...</p>
    }

    if (isDeleted) {
      return <Redirect to={
        { pathname: '/works', state: { msg: 'Item succesfully deleted!' } }
      } />
    }

    return (
        <>
        <h2>{project.name}</h2>
        <a href={project.urlLive}>Live Link</a>
        <br />
        <a href={project.urlGit}>Github repo</a>
        <br />
        <button onClick={destroy}>Delete Item</button>
        <br />
        <Link to={`/works/${props.match.params.id}/edit`}>
          <button>Edit</button>
        </Link>
        <br />
        <Link to="/works"><button>Back to all Projects</button></Link>
        </>
    )
}

export default Work