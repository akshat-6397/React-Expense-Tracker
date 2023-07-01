import React from "react";
import { Header } from "./components/App.styles";
import HomeComponent from "./components/HomeComponent";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  font-family: Montserrat;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
  min-width: 355px;
`;

function App() {
  return (
    <div style = {{display:"flex", justifyContent:"center"}}>
    <Container>
      <Header>Expense Tracker</Header>
      <HomeComponent />
    </Container>
    </div>
  );
}

export default App;
