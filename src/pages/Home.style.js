import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  width: 450px;
  font-size: 35px;
  font-weight: 700;
  color: #fff;
  position: relative;

  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 20%;
    height: 4px;
    top: 50%;
    background-color: #fff;
  }

  &::before {
    left: 30px;
    border-radius: 5px 0px 0px 5px;
  }

  &::after {
    right: 30px;
    border-radius: 0px 5px 5px 0px;
  }
`;
