import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Links = styled(NavLink)`
  @media only screen and (max-width: 600px) {
    justify-content: space-around;
  }
  display: inline-block;
  text-decoration: none;
  margin-bottom: 6px;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 700;
  color: #fff;

  &.active {
    background: linear-gradient(to left top, #f06, #f06, #fff);
  }
`;
