import React, { useState } from "react";
import {
  AddTransaction,
  BalanceBox,
  ExpenseBox,
  ExpenseContainer,
} from "./App.styles";
import AddTransactionView from "./AddTransactionView";
import styled from "styled-components";
import { RupeeIcon } from "./Icons/Icon";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0 10px;
  font-family: Montserrat;
  width: 90%;
`;

const Overview = (props) => {
  const [isAddTxnVisible, setIsAddTxnVisible] = useState(false);

  return (
    <Container>
      <BalanceBox>
        Balance: ${props.income - props.expense}
        <AddTransaction onClick={() => setIsAddTxnVisible(!isAddTxnVisible)}>
          {isAddTxnVisible ? "Cancel" : "ADD"}
        </AddTransaction>
      </BalanceBox>
      {isAddTxnVisible && (
        <AddTransactionView
          setIsAddTxnVisible={setIsAddTxnVisible}
          addTransaction={props.addTransaction}
        />
      )}
      <ExpenseContainer>
        <ExpenseBox isIncome={false}>
          Expense
          <span>
            <RupeeIcon height={"20px"} width={"20px"} color={"red"} marginTop={5}/>
            {props.expense}
          </span>
        </ExpenseBox>
        <ExpenseBox isIncome={true}>
          Income<span><RupeeIcon height={"20px"} width={"20px"} color={"green"} marginTop={5}/>{props.income}</span>
        </ExpenseBox>
      </ExpenseContainer>
    </Container>
  );
};
export default Overview;
