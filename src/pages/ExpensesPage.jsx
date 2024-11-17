
import React from 'react';
import ExpenseForm from '../components/ExpenseForm';

const ExpensesPage = ({ expenseList, handleAddExpense }) => (
  <div>
    <h2>Expenses Page</h2>
    <ExpenseForm onAddExpense={handleAddExpense} />
    <ul>
      {expenseList.map((expense, index) => (
        <li key={index}>{expense.name}: £{expense.amount}</li>
      ))}
    </ul>
  </div>
);

export default ExpensesPage;
