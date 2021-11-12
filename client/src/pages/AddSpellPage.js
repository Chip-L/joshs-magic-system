import React, { useState } from "react";
import FoundationForm from "../forms/FoundationForm";
import { Screen, Side, Title } from "./AddSpellPage.css";

const AddSpellPage = () => {
  const [foundationState, setFoundationState] = useState({});

  const handleSubmit = (event) => {
    // event.preventDefault();

    console.log("you submitted:");
    console.log(JSON.stringify(foundationState));
  };
  return (
    <Screen>
      <Side>
        <Title>Add Spell</Title>
        <FoundationForm
          values={foundationState}
          update={setFoundationState}
          onSubmit={handleSubmit}
        />
        {/* <HeightenedForm ...>  // <-- will be propegated in to a different table */}
        {/* <CastForm ...> // <-- will be propegated in to a different table */}
      </Side>
      <Side>
        <p>{JSON.stringify(foundationState)}</p>
      </Side>
    </Screen>
  );
};

export default AddSpellPage;
