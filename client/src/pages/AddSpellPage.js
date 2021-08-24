import React, { useState } from "react";
import FoundationForm from "../components/FoundationForm";
import { Button, Form, Title } from "./AddSpellPage.css";

const AddSpellPage = () => {
  const [foundationState, setFoundationState] = useState({});

  const handleSubmit = (event) => {
    // event.preventDefault();

    console.log("you submitted:");
    console.log(JSON.stringify(foundationState));
  };
  return (
    <>
      <Title>Add Spell</Title>
      <Form onSubmit={handleSubmit}>
        <FoundationForm values={foundationState} update={setFoundationState} />
        <Button type="submit" value="Submit" />
      </Form>
      <p>{JSON.stringify(foundationState)}</p>
    </>
  );
};

export default AddSpellPage;
