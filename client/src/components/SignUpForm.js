import React, { useState } from "react";
import {
  Button,
  Control,
  Form,
  Label,
  LabelGroup,
  Title,
} from "./Login+SignUpForm.css";

const SignUpForm = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    requestAdmin: false,
  });

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      // use add User mutation to add user
      // set token
      // set user in global store
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = async (event) => {
    let { name, value } = event.target;

    if (name === "requestAdmin") {
      value = event.target.checked;
    }

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <Title>Sign Up</Title>
      <Form onSubmit={handleSignUp}>
        <LabelGroup>
          <Label htmlFor="firstName">First Name:</Label>
          <Control
            type="text"
            id="firstName"
            placeholder="Your first name..."
            name="firstName"
            onChange={handleChange}
          ></Control>
        </LabelGroup>
        <LabelGroup>
          <Label htmlFor="lastName">Last Name:</Label>
          <Control
            type="text"
            id="lastName"
            placeholder="Your last name..."
            name="lastName"
            onChange={handleChange}
          ></Control>
        </LabelGroup>
        <LabelGroup>
          <Label htmlFor="email">Email:</Label>
          <Control
            type="email"
            id="email"
            placeholder="Your email..."
            name="email"
            onChange={handleChange}
          ></Control>
        </LabelGroup>
        <LabelGroup>
          <Label htmlFor="password">Password:</Label>
          <Control
            type="password"
            id="password"
            placeholder="Your new password..."
            name="password"
            onChange={handleChange}
          ></Control>
        </LabelGroup>
        <LabelGroup>
          <Label htmlFor="requestAdmin">Request Admin Access:</Label>
          <Control
            type="checkbox"
            id="requestAdmin"
            checked={formState.requestAdmin}
            name="requestAdmin"
            onChange={handleChange}
          ></Control>
        </LabelGroup>

        <Button type="submit" value="Submit" />
      </Form>
    </>
  );
};

export default SignUpForm;
