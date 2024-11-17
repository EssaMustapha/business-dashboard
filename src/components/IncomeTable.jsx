
import React from 'react';

const IncomeTable = ({ incomeList }) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Client</th>
        <th>Monthly (£)</th>
        <th>Annual (£)</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {incomeList.map((income, index) => (
        <tr key={index}>
          <td>{income.date}</td>
          <td>{income.name}</td>
          <td>£{income.monthlyAmount}</td>
          <td>£{income.annualAmount}</td>
          <td>{income.status}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default IncomeTable;
