import { useState } from "react";
import "./App.css";

import useTon, { network } from "./hooks/useTon";

function App() {
  const tonClient = useTon(network.MAINNET);
  const exAddr = "EQCE0HgxgTE-GGP750FiitKIzuQKdbG9zOxVgy0kUNqgVQNI";
  const [addr, setAddr] = useState(exAddr);
  const [balance, setBalance] = useState(null);
  const [history, setHistory] = useState(null);

  const fetchBalance = async () => {
    const _balance = await tonClient.getBalance(addr);
    setBalance(_balance);
  };

  const fetchTransactions = async () => {
    const _history = await tonClient.getTransactions(addr);
    setHistory(_history);
    console.log(_history);
  };
  return (
    <>
      <div>
        <input
          type="search"
          style={{ width: "500px" }}
          value={addr}
          onChange={(e) => setAddr(e.target.value)}
        />
      </div>
      <div>
        <button onClick={fetchBalance}>fetch balance</button>
        {balance && <span>Balance: {balance}</span>}
      </div>
      <div>
        <button onClick={fetchTransactions}>fetch Transactions</button>
        {/* {history && <span>Transactions: {history}</span>} */}
      </div>
    </>
  );
}

export default App;
