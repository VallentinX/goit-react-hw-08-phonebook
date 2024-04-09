import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Links = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 8px 16px;
  margin-bottom: 6px;
  border-radius: 4px;
  font-weight: 700;
  color: #fff;
  width: 100px;

  &.active {
    background: linear-gradient(to left top, #fff, #f06, #f06);
  }
`;
