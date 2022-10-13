import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 80px;

  border-bottom: 1px solid #212529;

  padding: 0 250px;

  img {
    width: 120px;
    height: 30px;
  }

  .btnLogout {
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

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 80px;

  border-bottom: 1px solid #212529;

  color: white;

  padding: 0 250px;

  h2 {
    font-weight: 700;
    font-size: 18px;
    color: #f8f9fa;
  }

  h3 {
    font-weight: 400;
    font-size: 12px;
    color: #868e96;
  }
`;
