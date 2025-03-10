import { useEffect, useMemo, useState } from "react";

export default function Converter() {
  const [amountEUR, setAmountEUR] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/EUR")
      .then((response) => response.json())
      .then((data) => {
        setExchangeRate(data.rates.USD);
      })
      .catch((error) => {
        console.error("Failed to exchange rate", error);
      });
  }, []);

  const convertedAmountUSD = useMemo(() => {
    return exchangeRate ? amountEUR * exchangeRate : 0;
  }, [amountEUR, exchangeRate]); // dipendenze: ricalcola quando amountEUR o exchangeRate cambiano;

  const handeleChangeEUR = (e) => {
    setAmountEUR(e.target.value);
  };

  return (
    <div>
      <h3>Amount in EUR</h3>
      <input
        type="text"
        value={amountEUR}
        onChange={handeleChangeEUR}
        min="0"
        step="0.01"
      ></input>

      {exchangeRate !== null ? (
        <p>Amount in USD: {convertedAmountUSD.toFixed(2)}</p> // toFixed serve per formattare un numero in una stringa
      ) : (
        <p>Loading exchange rate...</p>
      )}
    </div>
  );
}

// useMemo memorizza un valore calcolato in modo che venga ricalcolato solo quando una delle sue dipendenze cambia. Se nessuna delle dipendenze cambia, React restituirà il valore memorizzato evitando di rifare il calcolo.
