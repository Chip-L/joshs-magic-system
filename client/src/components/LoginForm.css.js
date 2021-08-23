import styled from "styled-components";

export const Title = styled.h2`
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelGroup = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
`;

export const Label = styled.label`
  // label formatting here
  padding-right: 0.5rem;
`;

export const Control = styled.input`
  // input field formatting here
`;

export const Button = styled.input`
  // width: 80%;
  background-color: blue;
  color: white;
  padding 1.4rem 5rem;
  border: none;
  border-radius: .4rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.6rem;
  
  &:hover {
    background-color: lightblue;
  }
`;
