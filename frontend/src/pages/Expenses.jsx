
import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

function Expenses({ onBack }) {
  const [expenses, setExpenses] = useState([]);

  const [form, setForm] = useState({
    title: "",
    category: "Food",
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

  function addExpense(e) {
    e.preventDefault();

    if (!form.title.trim() || Number(form.amount) <= 0) {
      alert("Please enter a valid title and amount.");
      return;
    }

    setExpenses([
      ...expenses,
      {
        ...form,
        id: Date.now(),
        amount: Number(form.amount)
      }
    ]);

    setForm({
      title: "",
      category: "Food",
      amount: "",
      date: new Date().toISOString().split("T")[0]
    });

    setShowForm(false);
  }

  function deleteExpense(id) {
    setExpenses(expenses.filter(item => item.id !== id));
  }

  const totalExpenses = expenses.reduce(
    (total, item) => total + item.amount,
    0
  );

  return (
    <div className="expense-page">

    
    <button
  className="expense-add-button"
  onClick={onBack}
>
  Back to Dashboard
</button>
      <h2>Expenses</h2>
      <p>Manage and track your daily expenses.</p>

      <div className="expense-summary">
        <h3>Total Expenses</h3>
        <h2>Rs. {totalExpenses.toLocaleString("en-LK")}</h2>
        <p>{expenses.length} transactions</p>
      </div>

      <button
        className="expense-add-button"
        onClick={() => setShowForm(!showForm)}
      >
        <FaPlus /> Add Expense
      </button>

      {showForm && (
        <form className="expense-form" onSubmit={addExpense}>

          <h3>Add New Expense</h3>

          <label>Expense Name</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Example: Lunch"
            required
          />

          <label>Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option>Food</option>
            <option>Transport</option>
            <option>Education</option>
            <option>Shopping</option>
            <option>Bills</option>
            <option>Health</option>
            <option>Entertainment</option>
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

          <button type="submit" className="expense-save-button">
            Save Expense
          </button>

        </form>
      )}

      <div className="expense-list">
        <h3>Expense History</h3>

        {expenses.length === 0 ? (
          <p>No expenses added yet.</p>
        ) : (
          expenses.map(item => (
            <div className="expense-item" key={item.id}>
              <div>
                <h4>{item.title}</h4>
                <p>{item.category} · {item.date}</p>
              </div>

              <strong>
                Rs. {item.amount.toLocaleString("en-LK")}
              </strong>

              <button
                onClick={() => deleteExpense(item.id)}
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

export default Expenses;
