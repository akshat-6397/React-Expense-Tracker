import React, { useState } from "react";
import {
  AddTransaction,
  BalanceBox,
  Container,
  ExpenseBox,
  ExpenseContainer,
} from "./App.styles";
import AddTransactionView from "./AddTransactionView";

const Overview = (props) => {
  const [isAddTxnVisible, setIsAddTxnVisible] = useState(false);

  return (
    <Container>
      <BalanceBox>
        Balance: ${props.income-props.expense}
        <AddTransaction onClick={() => setIsAddTxnVisible(!isAddTxnVisible)}>
          {isAddTxnVisible ? "Cancel" : "ADD"}
        </AddTransaction>
      </BalanceBox>
      {isAddTxnVisible && <AddTransactionView  setIsAddTxnVisible={setIsAddTxnVisible} addTransaction={props.addTransaction}/>}
      <ExpenseContainer>
        <ExpenseBox isIncome={false}>
            Expense<span>${props.expense}</span>
        </ExpenseBox>
        <ExpenseBox isIncome={true}>
            Income<span>${props.income}</span>
        </ExpenseBox>
      </ExpenseContainer>
    </Container>
  );
};
export default Overview;
