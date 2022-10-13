import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;

  width: 400px;
`;

export const Form = styled.form`
  width: 400px;

  background: #212529;
  border-radius: 4px;

  display: flex;
  flex-direction: column;

  gap: 15px;

  padding: 15px;

  color: white;

  margin-top: 25px;

  div {
    display: flex;
    flex-direction: column;

    align-items: center;

    line-height: 30px;
  }

  input {
    height: 48px;

    background: #343b41;

    border: 1px solid #f8f9fa;
    border-radius: 4px;

    align-items: center;

    padding-left: 15px;
  }

  select {
    height: 48px;

    background: #343b41;

    border: 1px solid #343b41;
    border-radius: 4px;

    padding-left: 15px;

    color: #f8f9fa;
  }

  button {
    height: 48px;

    background: #ff577f;

    border: 1px solid #ff577f;
    border-radius: 4px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;

  img {
    width: 150px;
  }

  .btnVoltar {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 67px;
    height: 40px;

    color: white;

    text-decoration: none;

    background: #212529;
    border-radius: 4px;
  }
`;
