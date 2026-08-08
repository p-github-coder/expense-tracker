function SpendingBreakdown({ expenses }) {
  const expenseTransactions = expenses.filter(
    (expense) => expense.type === "expense"
  );

  const categoryTotals = expenseTransactions.reduce(
    (totals, expense) => {
      if (!totals[expense.category]) {
        totals[expense.category] = 0;
      }

      totals[expense.category] += expense.amount;

      return totals;
    },
    {}
  );

  const categories = Object.entries(categoryTotals);

  return (
    <section className="spending-breakdown">
      <h2>Spending by Category</h2>

      {categories.length === 0 ? (
        <div className="breakdown-empty">
          <p>No expenses to analyze yet.</p>
        </div>
      ) : (
        <div className="category-list">
          {categories.map(([category, total]) => (
            <div className="category-row" key={category}>
              <span>{category}</span>

              <strong>
                ₦{total.toLocaleString()}
              </strong>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default SpendingBreakdown;