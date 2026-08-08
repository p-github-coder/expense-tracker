function MonthlySummary({ expenses }) {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const monthlyTransactions = expenses.filter((expense) => {
    if (!expense.date) return false;

    const transactionDate = new Date(expense.date);

    return (
      transactionDate.getMonth() === currentMonth &&
      transactionDate.getFullYear() === currentYear
    );
  });

  const monthlyIncome = monthlyTransactions
    .filter((expense) => expense.type === "income")
    .reduce((total, expense) => total + expense.amount, 0);

  const monthlyExpenses = monthlyTransactions
    .filter((expense) => expense.type === "expense")
    .reduce((total, expense) => total + expense.amount, 0);

  const monthlyNet = monthlyIncome - monthlyExpenses;

  return (
    <section className="monthly-summary">
      <h2>This Month</h2>

      <div className="monthly-summary-grid">
        <div className="monthly-summary-item">
          <span>Income</span>
          <strong className="income">
            +₦{monthlyIncome.toLocaleString()}
          </strong>
        </div>

        <div className="monthly-summary-item">
          <span>Expenses</span>
          <strong className="expense">
            -₦{monthlyExpenses.toLocaleString()}
          </strong>
        </div>

        <div className="monthly-summary-item">
          <span>Net</span>
          <strong>
            {monthlyNet >= 0 ? "+" : "-"}₦
            {Math.abs(monthlyNet).toLocaleString()}
          </strong>
        </div>
      </div>
    </section>
  );
}

export default MonthlySummary;