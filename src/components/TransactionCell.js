import React from "react";
import { Cell } from "./App.styles";
import { RupeeIcon } from "./Icons/Icon";

const TransactionCell = (props) => {
    console.log(props, "aaa");
    return (
        <Cell isExpense={props.item.type === "EXPENSE"}>
            <span>{props.item.description}</span>
            <span><RupeeIcon height={"20px"} width={"20px"} color={"black"}/>{props.item.amount}</span>
        </Cell>
    );
};
export default TransactionCell;