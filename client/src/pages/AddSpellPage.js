import React from "react";
import { Control, Form, Label, Section, Title } from "./AddSpellPage.css";

const AddSpellPage = () => {
  const [formState, setFormState] = useState({});

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
          <Control type="text" required name={formState.spellName} />
        </Section>
      </Form>
    </>
  );
};

export default AddSpellPage;
