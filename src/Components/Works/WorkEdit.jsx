import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Form from "./Form";

const WorkEdit = (props) => {
  console.log('ItemEdit - props', props)
  const [item, setItem] = useState({ name: "", urlLive: "", urlGit: "" });
  const [isUpdated,setIsUpdated] = useState(false)


  useEffect( () => {
       const makeAPICall = async () => {
      try {
          const response = await axios(`${apiUrl}/works/${props.match.params.id}`)
          setItem({ 
            item: response.data.item 
          })
        } catch (err) {
          console.error(err)
        }
  
   }
  makeAPICall()

  }, [])

   const handleChange = event => {
        setItem({
          ...item,
          [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()

        axios({
            url: `${apiUrl}/works/${props.match.params.id}`,
            method: 'PUT',
            data: item
        })
            .then(() => setIsUpdated(true))
            .catch(console.error)
    }

        if (isUpdated) {
            return <Redirect to={`/works/${props.match.params.id}`} />
        }

        return (
                <Form
                    item={item}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    cancelPath={`/works/${props.match.params.id}`}
                />
        )
}

export default WorkEdit