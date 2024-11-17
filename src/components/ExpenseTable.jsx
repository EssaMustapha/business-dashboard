
import React from 'react';

const ExpenseTable = ({ expenseList }) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Expense Name</th>
        <th>Amount (£)</th>
      </tr>
    </thead>
    <tbody>
      {expenseList.map((expense, index) => (
        <tr key={index}>
          <td>{new Date().toLocaleDateString()}</td>
          <td>{expense.name}</td>
          <td>£{expense.amount}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ExpenseTable;
