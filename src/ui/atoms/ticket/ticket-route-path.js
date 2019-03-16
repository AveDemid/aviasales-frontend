import styled from "styled-components";
import PlaneSvgUrl from "@assets/svg/plane.svg";

export const TicketRoutePath = styled.div`
  width: 96px;
  height: 1px;
  background-color: #d2d5d6;
  position: relative;
  &::after {
    display: block;
    content: "";
    width: 13px;
    height: 13px;
    background-image: url(${PlaneSvgUrl});
    position: absolute;
    right: -14px;
    top: -6px;
  }
`;
