import React from 'react';

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className='expense-date flex flex-col w-[5.5rem] h-[5.5rem] border border-[#ececec] bg-[#2a2a2a] text-white rounded-xl items-center justify-center'>
      <div className='expense-date__month text-xs font-bold'>{month}</div>
      <div className='expense-date__year text-xs'>{year}</div>
      <div className='expense-date__day text-2xl font-bold'>{day}</div>
    </div>
  );
};

export default ExpenseDate;
