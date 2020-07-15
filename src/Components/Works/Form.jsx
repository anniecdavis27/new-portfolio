import React from 'react'
import { Link } from 'react-router-dom'

const Form = ({ item, handleSubmit, handleChange, cancelPath }) => {
    console.log('ItemForm', item)
  
  return (
    <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
        placeholder='add a title'
        value={item.name}
        name="name"
        onChange={handleChange}
        />
        <br />
        <label>Live Link</label>
        <input
        placeholder='add a link'
        value={item.urlLive}
        name="urlLive"
        onChange={handleChange}
        />
<br />
        <label>Github Repo</label>
        <input
        placeholder='add a link'
        value={item.urlGit}
        name="urlGit"
        onChange={handleChange}
        />
<br />
<br />
        <button type="submit">Submit</button>
        <Link to={cancelPath}>
        <button>Cancel</button>
        </Link>
    </form>
    )
}

export default Form