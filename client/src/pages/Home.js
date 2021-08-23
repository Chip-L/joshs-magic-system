import React from "react";
// CSS
import { Content } from "./Home.css";
//Global Store
import { useStoreContext } from "../store/globalState";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

const Home = () => {
  const [{ user }] = useStoreContext();

  return (
    <Content>
      {user.name ? (
        <h1>Display spell here</h1>
      ) : (
        <>
          <h1>Hello Magic User!</h1>
          <LoginForm />
          <SignUpForm />
        </>
      )}
    </Content>
  );
};

export default Home;
