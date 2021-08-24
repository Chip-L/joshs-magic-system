import React, { useState } from "react";
import { Control, Label, LabelGroup, Section } from "../pages/AddSpellPage.css";

/**
 * displays the spell Foundation form. State is tracked in the parent. If values are passed in, they should be specifically for the foundation.
 *
 * values = foundation.*
 * update = function used to set the state.
 */
const FoundationForm = ({ values, update }) => {
  // const [foundationState, setFoundationState] = useState();
  const handleChange = (event) => {
    const { name, value, type } = event.target;
    const foundation = { ...values.foundation };
    let newValue = value;

    if (type === "checkbox") {
      console.log("isChecked:", event.target.checked);
      newValue = event.target.checked ? value : "";
    }

    foundation[name] = newValue;

    update({
      ...values,
      foundation,
    });
  };

  return (
    <Section className="foundation">
      <LabelGroup>
        <Label htmlFor="spellName">Spell Name</Label>
        <Control
          type="text"
          required
          id="spellName"
          name="spellName"
          value={values.spellName}
          onChange={handleChange}
        />
      </LabelGroup>
      <LabelGroup>
        <Label>Mana</Label>
        <Control
          type="integer"
          required
          id="mana"
          name="mana"
          value={values.mana}
          onChange={handleChange}
        />
      </LabelGroup>
      <LabelGroup>
        <Label>Traits</Label>
      </LabelGroup>
      <LabelGroup>
        <Label>Traditions</Label>
        <Label htmlFor="Arcane">Arcane</Label>
        <Control
          type="checkbox"
          // checked={
          //   values.traditions.arcane === undefined
          //     ? values.tradition.arcane
          //     : false
          // }
          name="traditions.arcane"
          value="arcane"
          onChange={handleChange}
        />
        <Label htmlFor="Divine">Divine</Label>
        <Label htmlFor="Occult">Occult</Label>
        <Label htmlFor="Primal">Primal</Label>
      </LabelGroup>
    </Section>
  );
};

export default FoundationForm;
