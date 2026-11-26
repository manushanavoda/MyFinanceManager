
import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

function Income({ onBack }) {
  const [incomes, setIncomes] = useState([]);

  const [form, setForm] = useState({
    title: "",
    category: "Salary",
    amount: "",
    date: new Date().toISOString().split("T")[0]
  });

  const [showForm, setShowForm] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function addIncome(e) {
    e.preventDefault();

    if (!form.title.trim() || Number(form.amount) <= 0) {
      alert("Please enter a valid income and amount.");
      return;
    }

    setIncomes([
      ...incomes,
      {
        ...form,
        id: Date.now(),
        amount: Number(form.amount)
      }
    ]);

    setForm({
      title: "",
      category: "Salary",
      amount: "",
      date: new Date().toISOString().split("T")[0]
    });

    setShowForm(false);
  }

  function deleteIncome(id) {
    setIncomes(incomes.filter(item => item.id !== id));
  }

  const totalIncome = incomes.reduce(
    (total, item) => total + item.amount,
    0
  );

  return (
    <div className="expense-page">

      <button className="expense-add-button" onClick={onBack}>
        Back to Dashboard
      </button>

      <h2>Income Management</h2>
      <p>Manage and track your income.</p>

      <div className="expense-summary">
        <h3>Total Income</h3>
        <h2>Rs. {totalIncome.toLocaleString("en-LK")}</h2>
        <p>{incomes.length} transactions</p>
      </div>

      <button
        className="income-add-button"
        onClick={() => setShowForm(!showForm)}
      >
        <FaPlus /> Add Income
      </button>

      {showForm && (
        <form className="expense-form" onSubmit={addIncome}>

          <h3>Add New Income</h3>

          <label>Income Name</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Example: Monthly Salary"
            required
          />

          <label>Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option>Salary</option>
            <option>Freelance</option>
            <option>Business</option>
            <option>Investment</option>
            <option>Other</option>
          </select>

          <label>Amount (LKR)</label>
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="Enter amount"
            min="0.01"
            step="0.01"
            required
          />

          <label>Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />

          <button type="submit" className="income-save-button">
            Save Income
          </button>

        </form>
      )}

      <div className="expense-list">
        <h3>Income History</h3>

        {incomes.length === 0 ? (
          <p>No income added yet.</p>
        ) : (
          incomes.map(item => (
            <div className="expense-item" key={item.id}>
              <div>
                <h4>{item.title}</h4>
                <p>{item.category} · {item.date}</p>
              </div>

              <strong className="income-amount">
                + Rs. {item.amount.toLocaleString("en-LK")}
              </strong>

              <button
                onClick={() => deleteIncome(item.id)}
                className="expense-delete-button"
              >
                <FaTrash />
              </button>
            </div>
          ))
        )}
      </div>

    </div>
  );
}

export default Income;
