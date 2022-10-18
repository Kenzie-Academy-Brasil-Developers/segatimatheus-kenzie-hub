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

  min-height: 80px;

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

  ul {
    width: 100%;

    background: #212529;
    border-radius: 4px;

    gap: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px 0;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LiCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 50px;

  width: 742px;
  height: 48.73px;

  background: #121214;
  border-radius: 4px;

  p {
    padding: 0 15px;
  }
`;
