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
  ${'' /* background: linear-gradient(#e66465, #9198e5); */}
  @media (min-width: 420px) {
    border: 2px solid black;
    padding-top: 10px;
    background-image: radial-gradient( circle farthest-corner at 22.4% 21.7%, rgba(4,189,228,1) 0%, rgba(2,83,185,1) 100.2% );
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;

function App() {
  return (
    <div style = {{display:"flex", justifyContent:"center", background: "linear-gradient(#e66465, #9198e5)", height:"100vh"}}>
    <Container>
      <Header>Expense Tracker</Header>
      <HomeComponent />
    </Container>
    </div>
  );
}

export default App;
