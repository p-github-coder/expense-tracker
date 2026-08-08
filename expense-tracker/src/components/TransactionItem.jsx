import { useState } from "react";

function TransactionItem({ expense, onDeleteExpense }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const isIncome = expense.type === "income";

  function handleDelete() {
    onDeleteExpense(expense.id);
  }

  return (
    <div className="transaction-item">
      <div className="transaction-info">
        <h3>{expense.description}</h3>

        <p>
          {expense.category} • {expense.date}
        </p>
      </div>

      <div className="transaction-details">
        <span
          className={`transaction-amount ${
            isIncome ? "income" : "expense"
          }`}
        >
          {isIncome ? "+" : "-"}₦
          {expense.amount.toLocaleString()}
        </span>

        {!showConfirmation ? (
          <button
            className="delete-button"
            onClick={() => setShowConfirmation(true)}
          >
            Delete
          </button>
        ) : (
          <div className="delete-confirmation">
            <span>Delete?</span>

            <button
              className="confirm-delete"
              onClick={handleDelete}
            >
              Yes
            </button>

            <button
              className="cancel-delete"
              onClick={() => setShowConfirmation(false)}
            >
              No
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TransactionItem;