import React from "react";
import { Container, Header } from "./components/App.styles";
import HomeComponent from "./components/HomeComponent";

function App() {
  return (
    <Container>
      <Header>Expense Tracker</Header>
      <HomeComponent />
    </Container>
  );
}

export default App;
