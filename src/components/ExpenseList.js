import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
    const expenses = [
        
        {id: 1, name: "Marketing", cost: 1000 },
        {id: 1, name: "Finance", cost: 1000 },
        {id: 1, name: "Sales", cost: 1000 },
        {id: 1, name: "Human Resources", cost: 1000 }
    ] 

    return(

        <table className='table'>
              <thead className="thead-light">
            <tr>
              <th scope="col">Department</th>
              <th scope="col">Allocated Budget</th>
              <th scope="col">Increase by 10</th>
              <th scope="col">Decrease by 10</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
            <tbody>
            {expenses.map((expense) => (
                <ExpenseItem id={expense.id}  name={expense.name} cost={expense.cost}  />
            ))}
            </tbody>
        </table>
        );
    }


export default ExpenseList;