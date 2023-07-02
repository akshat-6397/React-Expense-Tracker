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
  const [transaction, setTransaction] = useState([]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  useEffect(() => {
    calculateBalance();
  }, [transaction]);

  const addTransaction = (payload) => {
    const transactionArray = [...transaction];
    transactionArray.push(payload);
    setTransaction(transactionArray);
  };

  function calculateBalance(){
    let exp = 0;
    let inc = 0;
    transaction.map((item) => {
      item.type === "EXPENSE"
        ? (exp = exp + item.amount)
        : (inc = inc + item.amount);
        return null;
    });
    setExpense(exp);
    setIncome(inc);
  }

  const handleDeleteButton = (id) => {
    const arr = transaction.filter((item) => {
        return item.id !== id;
    });
    setTransaction(arr);
    calculateBalance();
  }

  return (
    <Container>
      <Overview
        addTransaction={addTransaction}
        expense={expense}
        income={income}
      />
      <Transaction handleDeleteButton={handleDeleteButton} transaction={transaction} />
    </Container>
  );
};
export default HomeComponent;
