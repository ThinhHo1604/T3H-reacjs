import React, { useState } from 'react';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    // Remove non-numeric characters except for possible decimal processing if needed, 
    // but for VND usually just integers or simple handling. 
    // Let's strip everything that is not a digit.
    const rawValue = event.target.value.replace(/\D/g, '');
    
    // Format with thousands separator
    const formattedValue = Number(rawValue).toLocaleString('vi-VN');
    
    // If input is empty, reset
    if (rawValue === '') {
        setEnteredAmount('');
    } else {
        setEnteredAmount(formattedValue);
    }
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Convert formatted string back to number for logic
    const numericAmount = +enteredAmount.replace(/\./g, '');

    const expenseData = {
      title: enteredTitle,
      amount: numericAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls flex flex-wrap gap-4 mb-4 text-left'>
        <div className='new-expense__control flex flex-col gap-2 w-full'>
          <label className='font-bold mb-2 block text-white'>Name</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
            placeholder="Enter name here ..."
            className='p-2 rounded-md border border-[#ccc] w-full focus:outline-none focus:ring-2 focus:ring-[#40005d]'
          />
        </div>
        <div className='new-expense__control flex flex-col gap-2 w-full'>
          <label className='font-bold mb-2 block text-white'>Amount</label>
          <input
            type='text'
            value={enteredAmount}
            onChange={amountChangeHandler}
            placeholder="Enter amount here ..."
            className='p-2 rounded-md border border-[#ccc] w-full focus:outline-none focus:ring-2 focus:ring-[#40005d]'
          />
        </div>
        <div className='new-expense__control flex flex-col gap-2 w-full'>
          <label className='font-bold mb-2 block text-white'>Date</label>
          <input
            type='date'
            min='2022-01-01'
            max='2025-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
            className='p-2 rounded-md border border-[#ccc] w-full focus:outline-none focus:ring-2 focus:ring-[#40005d]'
          />
        </div>
      </div>
      <div className='new-expense__actions text-right flex justify-end gap-4'>
        <button type="button" onClick={props.onCancel} className='font-bold cursor-pointer py-2 px-4 border border-transparent bg-[#e4e4e4] text-[#40005d] rounded-md hover:bg-[#dcdcdc] transition-colors'>Cancel</button>
        <button type='submit' className='font-bold cursor-pointer py-2 px-4 border border-[#40005d] bg-[#40005d] text-white rounded-md hover:bg-[#510674] hover:border-[#510674] transition-colors'>ADD</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
