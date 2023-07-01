import React, { useState } from "react";
import {
  AddTransaction,
  AddTransactionContainer,
  RadioBox,
} from "./App.styles";

const AddTransactionView = (props) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("EXPENSE");

  const addTransaction = () => {
    if(amount.length>10 || amount.length === 0 || description.length<3 || description.length === 0){
        alert("Please enter Correct details");
        return;
    }
    props.addTransaction({
      amount: Number(amount),
      description,
      type,
      id: Date.now(),
    });
    props.setIsAddTxnVisible(false);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const regex = /^[A-Za-z]+$/;

    if (value===''||regex.test(value)) {
      setDescription(value);
    }
  }

  return (
    <AddTransactionContainer>
      <input
        placeholder="Amount"
        value={amount}
        type="number"
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        placeholder="Description"
        value={description}
        onChange={handleChange}
      />
      <RadioBox>
        <input
          type="radio"
          id="expense"
          name="type"
          value="EXPENSE"
          checked={type === "EXPENSE"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          id="income"
          name="type"
          value="INCOME"
          checked={type === "INCOME"}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="income">Income</label>
      </RadioBox>
      <AddTransaction onClick={addTransaction}>Add Transaction</AddTransaction>
    </AddTransactionContainer>
  );
};

export default AddTransactionView;
