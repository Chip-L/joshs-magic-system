import React from "react";
import FoundationForm from "../components/FSoundationForm";
import { Button, Title } from "./AddSpellPage.css";

const AddSpellPage = () => {
  const [foundationState, setFoundationState] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("you submitted");
  };
  return (
    <>
      <Title>Add Spell</Title>
      <FoundationForm values={foundationState} update={setFoundationState} />
      <Button type="submit" value="Submit" />
    </>
  );
};

export default AddSpellPage;
