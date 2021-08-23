import React from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
// CSS
import { Content, Panel, PanelContainer, Divider } from "./Home.css";
//Global Store
import { useStoreContext } from "../store/globalState";

const Home = () => {
  const [{ user }] = useStoreContext();

  return (
    <Content>
      {user.name ? (
        <h1>Display spell here</h1>
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
