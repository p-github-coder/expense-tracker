import { useState } from "react";

const expenseCategories = [
  "Food",
  "Transport",
  "Shopping",
  "Bills",
  "Entertainment",
  "Health",
  "Other",
];

const incomeCategories = [
  "Salary",
  "Freelance",
  "Business",
  "Investment",
  "Gift",
  "Other",
];

function TransactionForm({ onAddExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");
  const [type, setType] = useState("expense");

  function handleSubmit(event) {
    event.preventDefault();

    const newExpense = {
      id: Date.now(),
      description,
      amount: Number(amount),
      category,
      date,
      type,
    };

    onAddExpense(newExpense);

    setDescription("");
    setAmount("");
    setCategory("Food");
    setDate("");
    setType("expense");
  }

  function handleTypeChange(event) {
    const newType = event.target.value;

    setType(newType);

    if (newType === "income") {
      setCategory("Salary");
    } else {
      setCategory("Food");
    }
  }

  const categories =
    type === "income" ? incomeCategories : expenseCategories;

  return (
    <section className="transaction-form">
      <h2>Add Transaction</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            placeholder="e.g. Lunch"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            placeholder="e.g. 5000"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            min="1"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="type">Type</label>

          <select
            id="type"
            value={type}
            onChange={handleTypeChange}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>

          <select
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            {categories.map((categoryOption) => (
              <option
                key={categoryOption}
                value={categoryOption}
              >
                {categoryOption}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>

          <input
            id="date"
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            required
          />
        </div>

        <button type="submit">
          Add Transaction
        </button>
      </form>
    </section>
  );
}

export default TransactionForm;