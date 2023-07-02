import React from "react";
import { Cell } from "./App.styles";
import { RupeeIcon } from "./Icons/Icon";

const TransactionCell = (props) => {
  return (
    <Cell isExpense={props.item.type === "EXPENSE"}>
      <span>{props.item.description.length>20?props.item.description.substring(0,15)+"...":props.item.description}</span>
      <span>
        <RupeeIcon height={"20px"} width={"20px"} color={"black"} />
        {props.item.amount}
      </span>
      <i
        className="fa-solid fa-trash-alt"
        title="Delete Item"
        onClick={() => props.handleDeleteButton(props.item.id)}
      ></i>
    </Cell>
  );
};
export default TransactionCell;
