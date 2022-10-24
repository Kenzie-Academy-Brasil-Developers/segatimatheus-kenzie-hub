import styled from "styled-components";

export const Form = styled.form`
  width: 400px;

  background: #212529;
  border-radius: 4px;

  display: flex;
  flex-direction: column;

  gap: 15px;

  padding: 15px;

  color: white;

  div {
    display: flex;
    justify-content: center;

    font-weight: 700;
  }

  input {
    height: 48px;

    background: #343b41;

    border: 1px solid #f8f9fa;
    border-radius: 4px;

    align-items: center;

    padding-left: 15px;

    color: white;
  }

  button {
    height: 48px;

    background: #ff577f;

    border: 1px solid #ff577f;
    border-radius: 4px;

    color: white;

    font-weight: 700;

    cursor: pointer;
  }

  .register {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 48px;

    background: #868e96;

    border: 1px solid #868e96;
    border-radius: 4px;

    color: white;

    text-decoration: none;
  }

  .registerAccount {
    font-weight: 400;
    color: #868e96;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;

    padding-bottom: 15px;
  }
`;
