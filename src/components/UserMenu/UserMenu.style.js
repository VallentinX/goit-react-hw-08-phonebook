import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.span`
  font-weight: 700;
  margin-right: 12px;
`;

export const logOutButton = styled.button`
  @media only screen and (max-width: 600px) {
    margin-right: 20px;
  }

  padding: 3px 10px 0 10px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid;
  background: linear-gradient(to left top, #f06, #f06, #fff);

  :hover {
    background: linear-gradient(to right bottom, #fff, #f06, #f06);
  }
`;
