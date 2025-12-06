import React from 'react';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
  return (
    <li>
      <div className='expense-item flex justify-between items-center shadow-md p-2 my-4 mx-0 rounded-xl bg-[#4b4b4b]'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description flex flex-col gap-1 items-start flex-1 ml-4 text-white'>
          <h2 className='text-xl font-bold flex-1 mx-2'>{props.title}</h2>
          <div className='expense-item__price text-lg font-bold text-white bg-[#40005d] border border-white p-2 rounded-xl min-w-[5rem] text-center'>
            {props.amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ExpenseItem;
