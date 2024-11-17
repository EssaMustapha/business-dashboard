
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Overview from './pages/Overview';
import IncomePage from './pages/IncomePage';
import ExpensesPage from './pages/ExpensesPage';
import ReportsPage from './pages/ReportsPage';
import DashboardGrid from './components/DashboardGrid';

function App() {
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);

  const handleAddIncome = (income) => {
    const monthlyAmount = income.frequency === 'Monthly' ? parseFloat(income.amount) : parseFloat(income.amount) / 12;
    const annualAmount = income.frequency === 'Annual' ? parseFloat(income.amount) : parseFloat(income.amount) * 12;

    const incomeEntry = {
      ...income,
      monthlyAmount: monthlyAmount.toFixed(2),
      annualAmount: annualAmount.toFixed(2),
      date: new Date().toLocaleDateString(),
      status: 'Pending',
    };

    setIncomeList([...incomeList, incomeEntry]);
  };

  const handleAddExpense = (expense) => {
    setExpenseList([...expenseList, expense]);
  };

  const handleUpdateStatus = (index, newStatus) => {
    const updatedList = [...incomeList];
    updatedList[index].status = newStatus;
    setIncomeList(updatedList);
  };

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/income" element={<IncomePage incomeList={incomeList} handleAddIncome={handleAddIncome} />} />
          <Route path="/expenses" element={<ExpensesPage expenseList={expenseList} handleAddExpense={handleAddExpense} />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/dashboard" element={<DashboardGrid />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
