
import {
  FaWallet,
  FaArrowUp,
  FaArrowDown,
  FaPiggyBank,
  FaHome,
  FaExchangeAlt,
  FaChartPie,
  FaFileAlt,
  FaCog,
  FaBell,
  FaPlus
} from "react-icons/fa";

function Dashboard({ onOpenExpenses, onOpenIncome }) {
  const transactions = [
    { name: "Salary", category: "Income", date: "Nov 25, 2026", amount: 85000, type: "income" },
    { name: "Food & Groceries", category: "Food", date: "Nov 24, 2026", amount: 4500, type: "expense" },
    { name: "Internet Bill", category: "Bills", date: "Nov 23, 2026", amount: 2500, type: "expense" },
    { name: "Freelance Work", category: "Income", date: "Nov 22, 2026", amount: 12000, type: "income" }
  ];

  return (
    <div className="app-container">

      <aside className="sidebar">
        <h2 className="logo">MyFinance</h2>

        <nav>
          <a className="nav-link active"><FaHome /> Dashboard</a>
          <button
  type="button"
  className="nav-link"
  onClick={onOpenExpenses}
>
  <FaExchangeAlt /> Expenses
</button>

<button
  type="button"
  className="nav-link"
  onClick={onOpenIncome}
>
  <FaArrowUp /> Income
</button>
          <a className="nav-link"><FaPiggyBank /> Budgets</a>
          <a className="nav-link"><FaChartPie /> Analytics</a>
          <a className="nav-link"><FaFileAlt /> Reports</a>
          <a className="nav-link"><FaCog /> Settings</a>
        </nav>
      </aside>

      <main className="main-content">

        <header className="topbar">
          <div>
            <h2>Dashboard</h2>
            <p>Welcome back! Here's your financial overview.</p>
          </div>

          <div className="topbar-actions">
            <FaBell size={20} />
            <span className="user-avatar">M</span>
          </div>
        </header>

        <section className="summary-container">

          <div className="summary-card">
            <div className="card-icon blue"><FaWallet /></div>
            <p>Total Balance</p>
            <h2>Rs. 45,000</h2>
          </div>

          <div className="summary-card">
            <div className="card-icon green"><FaArrowUp /></div>
            <p>Total Income</p>
            <h2>Rs. 97,000</h2>
          </div>

          <div className="summary-card">
            <div className="card-icon red"><FaArrowDown /></div>
            <p>Total Expenses</p>
            <h2>Rs. 52,000</h2>
          </div>

          <div className="summary-card">
            <div className="card-icon purple"><FaPiggyBank /></div>
            <p>Monthly Savings</p>
            <h2>Rs. 45,000</h2>
          </div>

        </section>

        <section className="content-grid">

          <div className="content-card transactions-card">
            <div className="section-heading">
              <h3>Recent Transactions</h3>
              <button className="text-button">View All</button>
            </div>

            {transactions.map((item, index) => (
              <div className="transaction-row" key={index}>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.category} · {item.date}</p>
                </div>

                <strong className={item.type}>
                  {item.type === "income" ? "+" : "-"}
                  Rs. {item.amount.toLocaleString("en-LK")}
                </strong>
              </div>
            ))}
          </div>

          <div className="content-card budget-card">
            <div className="section-heading">
              <h3>Monthly Budget</h3>
              <span>November</span>
            </div>

            <h2>Rs. 52,000 <small>/ Rs. 80,000</small></h2>

            <div className="progress-background">
              <div className="progress-fill"></div>
            </div>

            <p className="budget-info">65% of your monthly budget used</p>

            <button className="add-budget-button">
              <FaPlus /> Add Budget
            </button>
          </div>

        </section>

      </main>
    </div>
  );
}

export default Dashboard;
