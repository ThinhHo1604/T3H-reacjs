import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense bg-[#a892ee] p-4 rounded-xl w-[50rem] max-w-[95%] mx-auto my-8 text-center shadow-md'>
      {!isEditing && (
        <button onClick={startEditingHandler} className='font-bold cursor-pointer py-4 px-8 border border-[#40005d] bg-[#40005d] text-white rounded-xl hover:bg-[#510674] hover:border-[#510674] transition-colors'>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
