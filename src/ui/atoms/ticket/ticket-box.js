import styled from "styled-components";

export const TicketBox = styled.div`
  display: flex;

  background: #ffffff;
  box-shadow: 0 1px 4px 0 rgba(91, 137, 164, 0.25);
  border-radius: 5px;
  margin-bottom: 20px;

  transition-property: box-shadow;
  transition-duration: 300ms;
  transition-timing-function: ease;
  &:hover {
    box-shadow: 0 5px 25px 0 rgba(91, 137, 164, 0.1);
  }
`;
