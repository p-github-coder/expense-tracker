import TransactionItem from "./TransactionItem";

function TransactionList({ expenses, onDeleteExpense }) {
  return (
    <section className="transaction-list">
      <div className="transaction-list-header">
        <h2>Transactions</h2>
        <span>{expenses.length} transactions</span>
      </div>

      {expenses.length === 0 ? (
        <div className="empty-state">
          <h3>No transactions yet</h3>
          <p>
            Add your first income or expense to get started.
          </p>
        </div>
      ) : (
        <div className="transactions">
          {expenses.map((expense) => (
            <TransactionItem
              key={expense.id}
              expense={expense}
              onDeleteExpense={onDeleteExpense}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default TransactionList;