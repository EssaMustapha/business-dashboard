
import React, { useState } from 'react';

const IncomeForm = ({ onAddIncome }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('Monthly');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddIncome({ name, amount: parseFloat(amount), frequency });
    setName('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Client Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Amount (£)" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
        <option value="Monthly">Monthly</option>
        <option value="Annual">Annual</option>
      </select>
      <button type="submit">Add Income</button>
    </form>
  );
};

export default IncomeForm;
