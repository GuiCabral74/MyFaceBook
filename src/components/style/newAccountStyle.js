import styled from "styled-components";

export const ContainerNewAccount = styled.section`
  text-align: center;
  padding-top: 3.25rem;
  height: calc(100vh - 3.063rem);
  background: #d5d5d5;

  h1 {
    color: #1877f2;
    font-size: 4.75rem;
    margin-bottom: 2.75rem;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  margin: 0 auto;
  width: 33.75rem;
  height: 43.625rem;
  padding: 0.875rem 1.25rem;
  border-radius: 0.625rem;
  box-shadow: 0rem 0.25rem 1.688rem -0.25rem rgba(0, 0, 0, 0.33);

  h2 {
    font-size: 1.938rem;
  }
  
  p {
    font-size: 1.313rem;
    color: #8d94a3;
    margin-top: 0.625rem;
    ::after {
      content: "";
      display: block;
      border: 0.063rem solid #dadde1;
      width: 100%;
      margin-top: 1.563rem;
    }
  }

  a {
    text-decoration: none;
    color: #1877f2;
    font-size: 1.313rem;
    margin-top: 2.813rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;

  span input:nth-child(1) {
    width: 14.625rem;
    height: 3.25rem;
    padding: 0.938rem;
    border: 0.063 solid #dadde1;
    border-radius: 0.313rem;
    background: #fff;
    margin: 0 0.438rem;
  }

  input {
    width: 30.125rem;
    height: 3.25rem;
    border: 0.063rem solid #dadde1;
    border-radius: 0.313rem;
    margin-top: 0.75rem;
    padding: 0.938rem;
  }

  span input:nth-child(2) {
    font-size: normal;
    text-align: center;
    padding-left: 3.75rem;
  }

  button {
    background: #00a400;
    width: 15.188rem;
    margin: 0 auto;
    border: none;
    border-radius: 0.313rem;
    color: #fff;
    font-size: 1.5rem;
    padding: 0.5rem 0;
  }
`;

export const DateSpan = styled.span`
  margin-top: 1.563rem;
  line-height: 0.01;
  color: #8d94a3; ;
`;

export const GenderSection = styled.span`
  margin: 2.5rem 0 3.125rem;
  color: #8d94a3;

  input {
    width: 1rem;
    height: 1rem;
  }
`;

export const SelecGender = styled.span`
  color: #000;
  border-radius: 0.313rem;
  margin: 2.5rem 0.438rem;
  border: 0.063rem solid #dadde1;
  padding: 0.75rem 1.25rem;
  line-height: 3;

  label {
    margin-right: 0.813rem;
  }
`;
