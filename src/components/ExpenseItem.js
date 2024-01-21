import React, {useContext} from "react";
import { FaTimesCircle } from 'react-icons/fa';
import { FaPlus, FaMinus } from "react-icons/fa";
import { AppContext } from "../context/AppContext";


const ExpenseItem = (props) => {

    const {currency} = useContext(AppContext);
    return (
       <tr>
        <td>{props.name}</td>
        <td><span>{currency}</span>{props.cost}</td>
        <td><FaPlus size='1.6em' color="green" ></FaPlus></td>
        <td><FaMinus size='1.6em' color="red" ></FaMinus></td>
        <td><FaTimesCircle size='1.6em' color="black " ></FaTimesCircle></td>
       </tr>
    )
}

export default ExpenseItem; 