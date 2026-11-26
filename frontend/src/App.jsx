
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <>
      {currentPage === "dashboard" ? (
        <Dashboard
          onOpenExpenses={() => setCurrentPage("expenses")}
        />
      ) : (
        <Expenses
          onBack={() => setCurrentPage("dashboard")}
        />
      )}
    </>
  );
}

export default App;
