import React, { useEffect, useState } from "react";
import Overview from "./Overview";
import Transaction from "./Transaction";
import styled from "styled-components";

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0 10px;
    font-family: Montserrat;
    width: 100%;
`;

const HomeComponent = () => {
  const [transaction, setTranscation] = useState([]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  useEffect(() => {
    calculateBalance();
  }, [transaction]);

  const addTransaction = (payload) => {
    const transactionArray = [...transaction];
    transactionArray.push(payload);
    setTranscation(transactionArray);
  };

  function calculateBalance(){
    let exp = 0;
    let inc = 0;
    transaction.map((item) => {
      item.type === "EXPENSE"
        ? (exp = exp + item.amount)
        : (inc = inc + item.amount);
    });
    setExpense(exp);
    setIncome(inc);
  }

  return (
    <Container>
      <Overview
        addTransaction={addTransaction}
        expense={expense}
        income={income}
      />
      <Transaction transaction={transaction} />
    </Container>
  );
};
export default HomeComponent;
