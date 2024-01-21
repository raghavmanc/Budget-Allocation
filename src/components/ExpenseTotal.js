
import { AppContext } from '../context/AppContext'
import React, {useContext} from 'react'

const ExpenseTotal = () => {

const {expenses} = useContext(AppContext);

let expenseTotal = expenses.reduce((total,item)=>{
    return (total = total + item.cost)
},0)

  return (
    <div className='alert alert-primary'>
        <span>Spent so far: <span>$</span>{expenseTotal}</span>
    </div>
  )
}

export default ExpenseTotal