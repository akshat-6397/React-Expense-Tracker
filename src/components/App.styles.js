import styled from "styled-components";

export const Header = styled.div`
  color: black;
  font-size: 25px;
  font-family: Montserrat;
  font-weight: bold;
`;

export const BalanceBox = styled.div`
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top:20px;
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
    ${'' /* border: 1px solid #e6e8e9; */}
    gap: 10px;
    width: 100%;
    padding: 15px 20px;
    margin: 20px;
    margin-bottom: 0;
    & input {
        outline: none;
        padding: 10px 12px;
        border-radius: 4px;
        border: 1px solid #e6e8e9;
    }
    & input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    ;}
`;

export const RadioBox = styled.div`
    display: flex;
    width: 100%;
    font-weight: 500;
    align-items: center;
    margin: 10px 0 10px;
    & input {
        margin-left: 10px;
        cursor:pointer;
    }
`;

export const ExpenseContainer = styled.div`
    display: flex;
    gap: 12px;
    margin: 20px 20px;
    margin-bottom: 0;
    width: 100%;
`;

export const ExpenseBox = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border: 1px solid #e6e8e9;
    padding: 15px 20px;
    width: 100%;
    font-weight: bold;
    font-size: 14px;
    & span{
        font-weight: bold;
        font-size: 20px;
        color: ${(props) => (props.isIncome ? "green":"red")};
        margin-top:10px;
        align-items: center;
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
    & span {
        align-items: center;
    }
`;
