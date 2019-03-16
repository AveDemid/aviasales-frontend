import styled from "styled-components";
import { CheckboxListExtra } from "./checkbox-list-extra";

export const CheckboxListItem = styled.div`
  padding: 0 1.5rem;
  height: 3.6rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #f1fcff;
    > ${CheckboxListExtra} {
      opacity: 1;
    }
  }
`;
