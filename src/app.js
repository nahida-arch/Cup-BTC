import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import ShuffleGame from "./components/ShuffleGame";
import Header from "./components/Header";
import Account from "./components/Account";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [view, setView] = useState("dashboard");

  return (
    <div className="App">
      <Header />
      {isLoggedIn ? (
        <>
          {view === "dashboard" && <Dashboard />}
          {view === "game" && <ShuffleGame />}
          {view === "account" && <Account />}
        </>
      ) : (
        <div>Please log in to play.</div>
      )}
    </div>
  );
}

export default App;

