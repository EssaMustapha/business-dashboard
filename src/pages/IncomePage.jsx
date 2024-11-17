
import React from 'react';
import IncomeForm from '../components/IncomeForm';
import IncomeTable from '../components/IncomeTable';

const IncomePage = ({ incomeList, handleAddIncome }) => (
  <div>
    <h2>Income Page</h2>
    <IncomeForm onAddIncome={handleAddIncome} />
    <IncomeTable incomeList={incomeList} />
  </div>
);

export default IncomePage;
