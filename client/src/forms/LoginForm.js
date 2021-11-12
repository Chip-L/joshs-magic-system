import React, { useState } from "react";
// Queries/Mutations - GraphQL/Apollo
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../schema/mutations";
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

const LoginForm = () => {
  // global state variable
  const [, dispatch] = useStoreContext();

  // local state variable
  const [formState, setFormState] = useState({ email: "", password: "" });

  // set up mutation for logging in
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // use login mutation to get user
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const { token, user } = mutationResponse.data.login;

      // set token in storage for session management
      Auth.setToken(token);

      // set user in global store
      dispatch(setCurrentUser(user));
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
      <Title>Log In</Title>
      <Form onSubmit={handleFormSubmit}>
        <LabelGroup>
          <Label htmlFor="loginEmail">Email:</Label>
          <Control
            type="email"
            required
            id="loginEmail"
            placeholder="Your email..."
            name="email"
            onChange={handleChange}
          ></Control>
        </LabelGroup>
        <LabelGroup>
          <Label htmlFor="loginPassword">Password:</Label>
          <Control
            type="password"
            required
            id="loginPassword"
            placeholder="Your password..."
            name="password"
            onChange={handleChange}
          ></Control>
        </LabelGroup>
        <Button type="submit" value="Submit" />
      </Form>
      {error && <ErrMsg>{error.message}</ErrMsg>}
    </>
  );
};

export default LoginForm;
