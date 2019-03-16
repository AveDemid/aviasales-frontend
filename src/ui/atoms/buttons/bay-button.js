import styled from "styled-components";

export const BayButton = styled.button`
  display: block;
  background: #ff6d00;
  box-shadow: 0 0.1rem 0 0 #d64d08, 0 0.2rem 0.1rem 0 rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  outline: none;
  border: none;
  width: 100%;
  padding: 0.6rem 0;
  cursor: pointer;

  font-size: 1.6rem;
  line-height: 2.2rem;
  color: #ffffff;

  &:hover,
  &:focus {
    background: #ff8124;
    box-shadow: 0 0.1rem 0 0 #f7661d, 0 0.1rem 0.5rem 0 rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
  }
`;
