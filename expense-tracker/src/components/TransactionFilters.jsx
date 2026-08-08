function TransactionFilters({
  searchTerm,
  setSearchTerm,
  filterType,
  setFilterType,
}) {
  return (
    <section className="transaction-filters">
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <select
        value={filterType}
        onChange={(event) => setFilterType(event.target.value)}
      >
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expenses</option>
      </select>
    </section>
  );
}

export default TransactionFilters;