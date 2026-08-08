import { useEffect, useState } from "react";
import Header from "./components/Header";
import SummaryCards from "./components/SummaryCards";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import TransactionFilters from "./components/TransactionFilters";
import SpendingBreakdown from "./components/SpendingBreakdown";
import MonthlySummary from "./components/MonthlySummary";
import "./App.css";

function App() {
 const [expenses, setExpenses] = useState(() => {
  const savedExpenses = localStorage.getItem("expenses");

  return savedExpenses ? JSON.parse(savedExpenses) : [];
});

  const [searchTerm, setSearchTerm] = useState("");
const [filterType, setFilterType] = useState("all");

useEffect(() => {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}, [expenses]);

  function addExpense(expense) {
    setExpenses((currentExpenses) => [
      ...currentExpenses,
      expense,
    ]);
  }

  function deleteExpense(id) {
    setExpenses((currentExpenses) =>
      currentExpenses.filter((expense) => expense.id !== id)
    );
  }

  const totalIncome = expenses
    .filter((expense) => expense.type === "income")
    .reduce((total, expense) => total + expense.amount, 0);

  const totalExpenses = expenses
    .filter((expense) => expense.type === "expense")
    .reduce((total, expense) => total + expense.amount, 0);

  const balance = totalIncome - totalExpenses;

  const filteredExpenses = expenses.filter((expense) => {
  const matchesSearch = expense.description
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesType =
    filterType === "all" || expense.type === filterType;

  return matchesSearch && matchesType;
});

  return (
    <div className="app">
      <Header />

      <SummaryCards
        balance={balance}
        totalIncome={totalIncome}
        totalExpenses={totalExpenses}
      />


<MonthlySummary expenses={expenses} />

      <TransactionForm onAddExpense={addExpense} />

      <TransactionFilters
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
  filterType={filterType}
  setFilterType={setFilterType}
/>

      <TransactionList
  expenses={filteredExpenses}
  onDeleteExpense={deleteExpense}
/>

<SpendingBreakdown expenses={expenses} />
    </div>
  );
}

export default App;