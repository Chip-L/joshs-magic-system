import React from "react";
// CSS
import { Content } from "./Home.css";
//Global Store
import { useStoreContext } from "../store/globalState";
import LoginForm from "../components/LoginForm";

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
        </>
      )}
    </Content>
  );
};

export default Home;
