import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = ({ title, amount, date }) => {
  const [name, setName] = useState(title);

  const clickHandler = () => {
    // console.log('Clicked!!!')
    setName('Updated');
  };

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={date} />
        <div className='expense-item__description'>
          <h2>{name}</h2>
          <div className='expense-item__price'>${amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
