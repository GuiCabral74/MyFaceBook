import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: calc(100vh - 3.063rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #c4c4c4;
  padding: 0 3.25rem;
`;
export const Presentation = styled.section`
  width: 668px;
  margin-right: 7.375rem;

  p {
    font-size: 2.25rem;
    line-height: 2.625rem;
  }
`;
export const Title = styled.h1`
  color: #1877e7;
  font-size: 6.938rem;
`;

export const ContainerLogin = styled.section`
  background: #fff;
  width: 34.5rem;
  height: 21.875rem;
  border-radius: 0.625rem;
  box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0.25);
  display: flex;
  flex-direction: column;
  padding: 1.313rem 1.875rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    height: 6vh;
    border-radius: 0.625rem;
    margin-bottom: 1.375rem;
    border: 0.063rem solid #c4c4c4;
    padding: 0.938rem;
  }
`;

export const BtnLogin = styled.button`
  background: #1877e7;
  height: 5vh;
  color: #fff;
  text-align: center;
  border: none;
  border-radius: 0.625rem;
  line-height: 3.5;

  ::after {
    display: block;
    content: "";
    height: 0.063rem;
    background: #c4c4c4;
    margin-top: 1.563rem;
    position: static;
  }
`;

export const BtnNewAccount = styled(Link)`
  margin-top: 3.125rem;
  background: #17bf13;
  color: #fff;
  border-radius: 0.625rem;
  border: none;
  height: 6vh;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  line-height: 3.5;
`;
