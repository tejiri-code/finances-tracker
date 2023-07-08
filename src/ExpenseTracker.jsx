import React, { useState } from 'react';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [budget, setBudget] = useState(0);
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleBudgetChange = (e) => {
    setBudget(parseFloat(e.target.value));
  };

  const handleAddExpense = () => {
    if (category && amount) {
      const newExpense = {
        category,
        amount: parseFloat(amount),
      };

      setExpenses([...expenses, newExpense]);
      setCategory('');
      setAmount('');
    }
  };

  const handleDeleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  const handleFilterExpenses = (selectedCategory) => {
    if (selectedCategory === 'all') {
      setFilteredExpenses(expenses);
    } else {
      const filtered = expenses.filter((expense) => expense.category === selectedCategory);
      setFilteredExpenses(filtered);
    }
  };

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const remainingBudget = budget - totalExpenses;

  const categories = Array.from(new Set(expenses.map((expense) => expense.category)));

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-md">
        <div className="px-6 py-4">
          <h1 className="text-3xl font-bold mb-4 text-[#521963]">Expense Tracker</h1>
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category:
            </label>
            <input
              id="category"
              type="text"
              value={category}
              onChange={handleCategoryChange}
              className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
              Amount:
            </label>
            <input
              id="amount"
              type="number"
              step="0.01"
              value={amount}
              onChange={handleAmountChange}
              className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            onClick={handleAddExpense}
            className="bg-[#521963] hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            Add Expense
          </button>
        </div>
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold mb-2 text-[#521963]">Expenses:</h2>
          {expenses.length > 0 ? (
            <ul>
              {filteredExpenses.map((expense, index) => (
                <li
                  key={index}
                  className="border-b border-gray-300 py-3 flex justify-between items-center transition duration-200 hover:bg-gray-50"
                >
                  <div>
                    <span className="text-gray-800 font-bold">{expense.category}</span>
                    <span className="text-gray-500 ml-2">(${expense.amount.toFixed(2)})</span>
                  </div>
                  <button
                    className="text-red-600 hover:text-red-800 transition duration-200"
                    onClick={() => handleDeleteExpense(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 1c-.828 0-1.5.672-1.5 1.5v1H5v2h1v10c0 .828.672 1.5 1.5 1.5h6c.828 0 1.5-.672 1.5-1.5v-10h1V2.5C14.5 1.672 13.828 1 13 1h-3zm-.5 2h4v10H6V3h3.5zM8 8V5h4v3H8zm0 4v2h4v-2H8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No expenses added yet.</p>
          )}
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2 text-[#521963]">Total Expenses:</h3>
            <div className="bg-white px-4 py-3 border rounded-md shadow-sm">
              <span className="text-2xl font-bold text-gray-800">${totalExpenses.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-md">
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold mb-2 text-[#521963]">Budget:</h2>
          <div className="mb-4">
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
              Monthly Budget:
            </label>
            <input
              id="budget"
              type="number"
              step="0.01"
              value={budget}
              onChange={handleBudgetChange}
              className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold text-gray-800">Remaining Budget:</div>
            <div className="text-2xl font-bold text-gray-800">${remainingBudget.toFixed(2)}</div>
          </div>
        </div>
      </div>
      <div className="mt-8 max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-md">
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold mb-2 text-[#521963]">Categories:</h2>
          <div className="mb-4">
            <label htmlFor="filterCategory" className="block text-sm font-medium text-gray-700 mb-1">
              Filter by Category:
            </label>
            <select
              id="filterCategory"
              value={category}
              onChange={(e) => handleFilterExpenses(e.target.value)}
              className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          {/* Render categorized expenses */}
          {category === "all" ? (
            <ul>
              {expenses.map((expense, index) => (
                <li key={index}>
                  {/* Render expense details */}
                </li>
              ))}
            </ul>
          ) : (
            <ul>
              {filteredExpenses.map((expense, index) => (
                <li key={index}>
                  {/* Render filtered expense details */}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="mt-8 max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-md">
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold mb-2 text-[#521963]">Reports:</h2>
          <p className="text-gray-600">Generate reports to visualize your spending habits.</p>
          {/* Add report generation and visualization logic using charting libraries */}
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;