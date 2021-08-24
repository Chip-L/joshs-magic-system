import React, { useState } from "react";
import { Control, Form, Label, Section } from "../pages/AddSpellPage.css";

/**
 * displays the spell Foundation form. State is tracked in the parent. If values are passed in, they should be specifically for the foundation.
 *
 * values = foundation.*
 * update = function used to set the state.
 */
const FoundationForm = ({ values, update }) => {
  // const [foundationState, setFoundationState] = useState();
  const handleChange = (event) => {
    const { name, value } = event.target;
    const foundation = { ...values.foundation };
    foundation[name] = value;

    update({
      ...values,
      foundation,
    });
  };

  return (
    <Section className="foundation">
      <Label htmlFor="spellName">Spell Name</Label>
      <Control
        type="text"
        required
        id="spellName"
        name="spellName"
        value={values.spellName}
        onChange={handleChange}
      />
      <Label>Mana</Label>
      <Label>Traits</Label>
    </Section>
  );
};

export default FoundationForm;
