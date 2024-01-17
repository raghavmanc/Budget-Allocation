import React from "react";
import { FaTimesCircle } from 'react-icons/fa';
import { FaPlus, FaMinus } from "react-icons/fa";

const ExpenseItem = (props) => {
    return (
       <tr>
        <td>{props.name}</td>
        <td>{props.cost}</td>
        <td><FaPlus size='2.2em' color="green" ></FaPlus></td>
        <td><FaMinus size='2.2em' color="red" ></FaMinus></td>
        <td><FaTimesCircle size='2.2em' color="black" ></FaTimesCircle></td>
       </tr>
    )
}

export default ExpenseItem; 