import styled from "styled-components";

export const Home = () => {
  return (
    <Home.Container>
      <Home.Title>Not perfect, but okay</Home.Title>
    </Home.Container>
  );
};

Home.Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

Home.Title = styled.h1`
  font-size: 30px;
`;
