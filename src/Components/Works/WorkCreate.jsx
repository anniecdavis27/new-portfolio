import React, { useState } from "react";
import axios from "axios";
import Form from "./Form";
import apiUrl from '../../apiConfig'

const ItemCreate = (props) => {
    console.log('ItemCreate props', props)
  const [input, setInput] = useState({ name: "", urlLive: "", urlGit: "" });
  const [item, setItem] = useState(null);

  const handleChange = (event) => {
    console.log("event", event.target.name, event.target.value);
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
  
    event.preventDefault();

    console.log("handleSubmit");
    axios({
      url: `${apiUrl}/works`,
      method: "POST",
      data: input,
    })
      .then((res) => {
          setItem({ createdItem: res.data.item })
          props.history.push('/works')
        })
      .catch(console.error);
  };

  return (

      <Form
        item={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/"
      />
  );
};

export default ItemCreate;