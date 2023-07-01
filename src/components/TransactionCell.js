import React from "react";
import { Cell } from "./App.styles";

const TransactionCell = (props) => {
    console.log(props, "aaa");
    return (
        <Cell isExpense={props.item.type === "EXPENSE"}>
            <span>{props.item.description}</span>
            <span>${props.item.amount}</span>
        </Cell>
    );
};
export default TransactionCell;