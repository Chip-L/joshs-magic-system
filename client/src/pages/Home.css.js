import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  max-width: 1440px;
  margin: 2rem auto;
`;

export const PanelContainer = styled.div`
  margin: 2rem;
  border: 1px solid black;
  border-radius: 0.5rem;

  background-color: rgb(232, 240, 254);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Panel = styled.div`
  text-align: center;
  padding: 1rem 0.5rem;
`;

export const Divider = styled.div`
  border-top: 0.3rem solid black;
  width: 80%;
  margin: 0.15rem auto 0 auto;

  @media (min-width: 426px) {
    border-top: none;
    width: 0;

    border-left: 0.3rem solid black;
    height: calc(262px * 0.8);
    margin: auto 0 auto 0.15rem;
  }
`;
