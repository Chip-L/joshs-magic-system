import styled from "styled-components";

export const Title = styled.h2`
  margin-bottom: 1rem;
`;

export const Section = styled.section`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background-color: rgba(251, 245, 180, 0.3);
`;

export const Form = styled.form`
  // form styling here
`;

export const Label = styled.label`
  padding-right: 0.5rem;
  align-text: right;

  &::after {
    content: ":";
  }
`;

export const Control = styled.input`
  // input field formatting here
`;

export const Button = styled.input`
  background-color: blue;
  color: white;
  margin-top: 0.5rem; padding 1.4rem 5rem;
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.6rem;

  &:hover {
    background-color: lightblue;
  }
`;
