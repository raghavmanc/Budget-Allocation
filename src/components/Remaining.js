import { AppContext } from '../context/AppContext'
import React, {useContext} from 'react'


const Remaining = () => {
 
const {budget,expenses} = useContext(AppContext);

let expenseTotal = expenses.reduce((total,item)=>{
    return (total = total + item.cost)},0)

  return (
    <div className='alert alert-success'>
      <span>Remaining: <span>$</span>{budget - expenseTotal}</span>
      </div>
  )
}

export default Remaining;