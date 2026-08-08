function SummaryCards({ balance, totalIncome, totalExpenses }) {
  return (
    <section className="summary-cards">
      <div className="summary-card">
        <p>Total Balance</p>
        <h2>₦{balance.toLocaleString()}</h2>
      </div>

      <div className="summary-card">
        <p>Total Income</p>
        <h2>₦{totalIncome.toLocaleString()}</h2>
      </div>

      <div className="summary-card">
        <p>Total Expenses</p>
        <h2>₦{totalExpenses.toLocaleString()}</h2>
      </div>
    </section>
  );
}

export default SummaryCards;