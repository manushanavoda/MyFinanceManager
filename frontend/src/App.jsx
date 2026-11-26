
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import Income from "./pages/Income";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <>
      {currentPage === "dashboard" && (
        <Dashboard
          onOpenExpenses={() => setCurrentPage("expenses")}
          onOpenIncome={() => setCurrentPage("income")}
        />
      )}

      {currentPage === "expenses" && (
        <Expenses onBack={() => setCurrentPage("dashboard")} />
      )}

      {currentPage === "income" && (
        <Income onBack={() => setCurrentPage("dashboard")} />
      )}
    </>
  );
}

export default App;
