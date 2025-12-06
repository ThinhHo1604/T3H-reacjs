import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Some Book',
    amount: 50000,
    date: new Date(2025, 0, 16),
  },
  {
    id: 'e2',
    title: 'Electricity Bill',
    amount: 750000,
    date: new Date(2024, 9, 10),
  },
  {
    id: 'e3',
    title: 'New Bike',
    amount: 1500000,
    date: new Date(2023, 4, 8),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
