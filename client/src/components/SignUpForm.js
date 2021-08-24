import React, { useState } from "react";
// Queries/Mutations - GraphQL/Apollo
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../schema/mutations";
// CSS
import {
  Button,
  Control,
  ErrMsg,
  Form,
  Label,
  LabelGroup,
  Title,
} from "./Login+SignUpForm.css";
// global store
import { useStoreContext } from "../store/globalState";
import { setCurrentUser } from "../store/actions";
// Utils
import Auth from "../utils/authentication";

const SignUpForm = () => {
  // global state variable
  const [, dispatch] = useStoreContext();

  // local state
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    requestAdmin: false,
  });

  // set up mutation for signing up
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      // console.log(formState);
      const variables = {
        firstName: formState.firstName,
        lastName: formState.lastName,
        email: formState.email,
        password: formState.password,
        isAdmin: formState.requestAdmin,
      };

      // use add User mutation to add user
      const mutationResponse = await addUser({ variables });
      const { token, user } = mutationResponse.data.addUser;

      // set token in storage for session management
      Auth.setToken(token);

      // set user in global store
      dispatch(setCurrentUser(user));
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

  // console.log("errors:", errors);
  // const { error } = errors;
  console.log("signup error:", error);
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
            required
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
            required
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
            required
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
      {error && <ErrMsg>{error.message}</ErrMsg>}
    </>
  );
};

export default SignUpForm;
