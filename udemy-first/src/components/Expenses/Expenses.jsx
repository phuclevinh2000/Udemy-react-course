import React from 'react'
import "./Expenses.css"
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'

const Expenses = ({expenses}) => {
  return (
    <Card className='expenses'>
      {expenses.map((x) => (
        <ExpenseItem key={x.id} title={x.title} amount={x.amount} date={x.date}/>
      ))}
    </Card>
  )
}

export default Expenses
