import React, { useState } from "react";
import { Control, Form, Label, Section } from "../pages/AddSpellPage.css";

const FoundationForm = () => {
  // const [foundationState, setFoundationState] = useState();

  return (
    <Form onSubmit={handleSubmit}>
      <Section className="foundation">
        <Label htmlFor="spellName">Spell Name</Label>
        <Control
          type="text"
          required
          id="spellName"
          name="spellName"
          onChange={handleChange}
        />
        <Label></Label>
        <Label>Traits</Label>
      </Section>
    </Form>
  );
};

export default FoundationForm;
