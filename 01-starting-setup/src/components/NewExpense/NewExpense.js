import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing]= useState(false);
  const saveExpenseDataHandler=(enteredExpenseData)=>{
    const expenseData ={
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  const editingFormHandler=()=>{
    setIsEditing(true);
    //console.log(isEditing);
  }

  const stopEditingForm =()=>{
    setIsEditing(false);
  }

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={editingFormHandler}>Add Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingForm}/>}
    </div>
  );
};

export default NewExpense;