import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  font-family: Montserrat;
  min-width: 280px;
  border: 1px solid black;
`;

export const Header = styled.div`
  color: black;
  font-size: 25px;
  font-family: sans-seriff;
  font-weight: bold;
`;

export const BalanceBox = styled.div`
  font-size: 18px;
  font-weight: bold;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top:50px;
`;

export const AddTransaction = styled.div`
  background: black;
  color: white;
  text-align: center;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
`;

export const AddTransactionContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #e6e8e9;
    gap: 10px;
    width: 100%;
    padding: 15px 20px;
    margin: 20px;
    & input {
        outline: none;
        padding: 10px 12px;
        border-radius: 4px;
        border: 1px solid #e6e8e9;
    }
`;

export const RadioBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
`;

export const ExpenseContainer = styled.div`
    display: flex;
    gap: 12px;
    margin: 20px;
`;

export const ExpenseBox = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border: 1px solid #e6e8e9;
    padding: 15px 20px;
    width: 135px;
    font-size: 14px;
    & span{
        font-weight: bold;
        font-size: 20px;
        color: ${(props) => (props.isIncome ? "green":"red")};
    }
`;

export const Cell = styled.div`
    display: flex;
    padding: 10px 15px;
    font-size: 14px;
    border-radius: 2px;
    align-items: center;
    font-weight: normal;
    justify-content: space-between;
    border: 1px solid #e6e8e9;
    border-right: 4px solid ${(props) => (props.isExpense ? "red": "green")};
    width: 90%;
`;
