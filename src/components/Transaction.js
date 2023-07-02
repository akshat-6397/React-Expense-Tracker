import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TransactionCell from "./TransactionCell";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Montserrat;
  padding: 10px 22px;
  font-size: 18px;
  width: 100%;
  gap: 10px;
  font-weight: bold;
  & input {
    padding: 10px 12px;
    border-radius: 12px;
    background: #e6e8e9;
    border: 1px solid #e6e8e9;
    outline: none;
    width: 90%;
  }
`;

const Transaction = (props) => {
  const [filteredTransaction, setFilteredTransaction] = useState(
    props.transaction
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    filteredData();
  },[props.transaction, searchText]);

  const filteredData = () => {
    if (!searchText || !searchText.trim().length) {
      setFilteredTransaction(props.transaction);
      return;
    }
    let txn = [...props.transaction];
    txn = txn.filter((item) =>
      item.description.toLowerCase().includes(searchText.toLowerCase().trim())
    );
    setFilteredTransaction(txn);
  };

  return (
    <Container>
      Transactions
      <input
        placeholder="Search"
        value={searchText}
        onChange={(e) => {setSearchText(e.target.value)
        filteredData()}}
      />
      {filteredTransaction.length > 0
        ? filteredTransaction.map((item) => (
            <TransactionCell key={item.id} handleDeleteButton={props.handleDeleteButton} item={item}/>
          ))
        : null}
    </Container>
  );
};

export default Transaction;
