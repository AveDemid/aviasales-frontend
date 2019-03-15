import styled from "styled-components";
import { ButtonSwitch } from "./button-switch";

export const ButtonSwitchGroup = styled.div`
  display: flex;
  padding: 0 1px;

  & > ${ButtonSwitch} {
    flex-grow: 1;
    border-radius: 0;
    margin: 0 -1px;
    &:first-child {
      border-top-left-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
    }
    &:last-child {
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }
  }
`;
