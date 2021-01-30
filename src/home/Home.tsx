import { useMemo } from "react";
import styled from "styled-components";

export const Home = () => {
const notes = useMemo(() => ([
  '1. Add path aliases'
]), []);

  return (
    <Home.Container>
      <Home.Title>Not perfect, but okay</Home.Title>
      {notes.map((note) => (
        <Home.Note>{note}</Home.Note>
      ))}
    </Home.Container>
  );
};

Home.Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

Home.Title = styled.h1`
  font-size: 30px;
`;

Home.Note = styled.p`
  border-bottom: 1px solid black;
  font-size: 16px;
  text-align: center;
  width: 500px;
`;
