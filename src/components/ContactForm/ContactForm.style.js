import styled from "styled-components";

export const Container = styled.form`
  align-items: center;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 5px;
  font-size: 18px;
  border-radius: 5px;
  text-align: center;
  font-weight: 700;
`;

export const Button = styled.button`
  align-self: center;
`;

export const AddContact = styled.h2`
  color: #fff;
  margin: 0;
  padding: 0;
`;
