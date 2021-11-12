import React from "react";
import LoginForm from "../forms/LoginForm";
import SignUpForm from "../forms/SignUpForm";
// CSS
import { Content, Panel, PanelContainer, Divider } from "./Home.css";
//Global Store
import { useStoreContext } from "../store/globalState";
// Utils
import Auth from "../utils/authentication";

const Home = () => {
  const [{ user }] = useStoreContext();

  return (
    <Content>
      {Auth.isLoggedIn() ? (
        <>
          <h2>
            Welcome: {user.firstName} {user.lastName}
          </h2>
          <h1>Display spell here</h1>
        </>
      ) : (
        <>
          <h1>Hello Magic User!</h1>
          <PanelContainer>
            <Panel>
              <LoginForm />
            </Panel>
            <Divider />
            <Panel>
              <SignUpForm />
            </Panel>
          </PanelContainer>
        </>
      )}
    </Content>
  );
};

export default Home;
