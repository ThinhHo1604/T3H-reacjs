import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');
  const [filteredMonth, setFilteredMonth] = useState('0');

  const filterChangeYearHandler = (event) => {
    setFilteredYear(event.target.value);
  };

  const filterChangeMonthHandler = (event) => {
    setFilteredMonth(event.target.value);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return (
        expense.date.getFullYear().toString() === filteredYear &&
        expense.date.getMonth().toString() === filteredMonth
    );
  });

  const expenseTotal = filteredExpenses.reduce((total, expense) => total + expense.amount, 0);
  const expenseCount = filteredExpenses.length;
  
  // Calculate max daily spend
  const maxDailySpend = filteredExpenses.reduce((max, expense) => Math.max(max, expense.amount), 0);

  return (
    <div className='expenses p-4 bg-[#1f1f1f] rounded-xl shadow-md w-[50rem] max-w-[95%] mx-auto my-8'>
      <ExpenseFilter
        selectedYear={filteredYear}
        selectedMonth={filteredMonth}
        onChangeFilterYear={filterChangeYearHandler}
        onChangeFilterMonth={filterChangeMonthHandler}
      />
      
      <div className='text-white text-center mb-4 p-4 bg-[#4b4b4b] rounded-xl flex flex-col sm:flex-row justify-around items-center gap-4 sm:gap-0'>
        <div className='flex flex-col'>
            <span className='text-sm opacity-70'>Total Items</span>
            <span className='text-2xl font-bold text-[#a892ee]'>{expenseCount}</span>
        </div>
        <div className='hidden sm:block w-px h-10 bg-[#ececec] opacity-20'></div>
        <div className='flex flex-col'>
            <span className='text-sm opacity-70'>Total Amount</span>
            <span className='text-2xl font-bold text-[#a892ee]'>
              {expenseTotal.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
            </span>
        </div>
        <div className='hidden sm:block w-px h-10 bg-[#ececec] opacity-20'></div>
        <div className='flex flex-col'>
            <span className='text-sm opacity-70'>Max Daily</span>
            <span className='text-2xl font-bold text-[#a892ee]'>
              {maxDailySpend.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
            </span>
        </div>
      </div>

      <ExpensesChart expenses={filteredExpenses} year={filteredYear} month={filteredMonth} />
      <ExpensesList items={filteredExpenses} />
    </div>
  );
};

export default Expenses;
