import React from "react";
import { Form, Label, Section, Title } from "./AddSpellPage.css";

const AddSpellPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("you submitted");
  };
  return (
    <>
      <Title>Add Spell</Title>
      <Form onSubmit={handleSubmit}>
        <Section>
          <Label>Spell Name</Label>
        </Section>
      </Form>
    </>
  );
};

export default AddSpellPage;
