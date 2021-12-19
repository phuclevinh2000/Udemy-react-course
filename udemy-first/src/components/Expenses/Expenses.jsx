import React, {useState} from 'react'

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter'
import "./Expenses.css"

const Expenses = ({expenses}) => {
  const [filteredYear, setFilteredYear] = useState('2021')

  const filterChangeHandler = selectedYear => {
    console.log(selectedYear)
  }
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {expenses.map((x) => (
          <ExpenseItem key={x.id} title={x.title} amount={x.amount} date={x.date}/>
        ))}
      </Card>
    </div>
  )
}

export default Expenses
