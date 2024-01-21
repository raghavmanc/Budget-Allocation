import React, {useContext, useState} from 'react'
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const {budget, currency} = useContext(AppContext);
  const [budgetX, setBudgetX] = useState(budget);
  return(

    <div className='alert alert-secondary'>
      <span>Budget: <span>{currency}</span><input
              
                        required='required'
                        type='number'
                        id='cost'
                        value={budget}
                        style={{size: 10}}
                        onChange={(event) => setBudgetX(budget)}>
                        </input></span>
    </div>
  )
}

export default Budget;