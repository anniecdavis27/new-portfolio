import React from "react";
import styled, { withTheme } from 'styled-components';
import { backgroundColor, textColor } from '../theme';
import './contact.scss'

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;

    const Button = styled.button`
    background: ${backgroundColor};
    color: ${textColor};

    `;

    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mknqkwjp"
        method="POST"
      >
        <label className="form-label">First Name: </label>
        <br />
        <input type="text" name="first-name" className="form-input" />
        <br />
        <label className="form-label">Last Name: </label>
        <br />
        <input type="text" name="last-name" className="form-input" />
        <br />
        <label className="form-label">Email: </label>
        <br />
        <input type="email" name="email" className="form-input" />
        <br />
        <label className="form-label">Message: </label>
        <br />
        <textarea name="message" rows="10" cols="30" className="form-input" required> </textarea>
        <br />
        <br />
        {status === "SUCCESS" ? <p>Thanks!</p> : <Button>Submit</Button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default MyForm
