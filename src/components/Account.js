import React from "react";

const Account = () => {
  return (
    <div className="account">
      <h2>Account Information</h2>
      <p>Name: John Doe</p>
      <p>Birthdate: 01/01/1990</p>
      <button>Deposit</button>
      <button>Withdraw</button>
      <h3>Transaction History</h3>
      <ul>
        <li>Deposit: 0.1 BTC (Success)</li>
        <li>Withdraw: 0.05 BTC (Success)</li>
      </ul>
    </div>
  );
};

export default Account;

