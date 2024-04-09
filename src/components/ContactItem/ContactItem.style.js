import styled from "styled-components";

export const ContactItems = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  padding: 5px 10px;
  gap: 10px;
`;

export const ContactName = styled.span`
  color: black;
  font-weight: bold;
`;

export const ContactNumber = styled.a`
  color: black;
  font-weight: bold;
  cursor: pointer;

  &&:hover {
    text-decoration: underline;
  }
`;

export const EditButton = styled.button`
  background: linear-gradient(to right bottom, #f06, #f06, #fff);
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  outline: none;
  padding: 8px 16px;
  text-align: center;
  &&:hover {
    background: linear-gradient(to right bottom, #fff, #f06, #f06);
  }
  margin-right: 10px;
`;

export const DeleteButton = styled.button`
  @media only screen and (max-width: 600px) {
    margin-right: 10px;
  }
  background: linear-gradient(to left top, #fff, #f06, #f06);
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  outline: none;
  padding: 8px 16px;
  text-align: center;
  &&:hover {
    background: linear-gradient(to right bottom, #fff, #f06, #f06);
  }
`;
