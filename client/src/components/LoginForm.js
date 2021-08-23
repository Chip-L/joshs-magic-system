import React, { useState } from "react";
import {
  Button,
  Control,
  Form,
  Label,
  LabelGroup,
  Title,
} from "./LoginForm.css";

// global store

const LoginForm = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // use login mutation to get user
      // set token
      // set user in global store
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <Title>Login</Title>
      <Form onSubmit={handleFormSubmit}>
        <LabelGroup>
          <Label for="email">Email:</Label>
          <Control
            type="email"
            id="email"
            placeholder="Your email..."
            name="email"
            onChange={handleChange}
          ></Control>
        </LabelGroup>
        <LabelGroup>
          <Label for="password">Password:</Label>
          <Control
            type="password"
            id="password"
            placeholder="Your password..."
            name="password"
            onChange={handleChange}
          ></Control>
        </LabelGroup>
        <Button type="submit" value="Submit" />
      </Form>
    </>
  );
};

export default LoginForm;
