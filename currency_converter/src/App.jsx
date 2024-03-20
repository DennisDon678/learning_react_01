import { useState, useEffect } from "react";
import "./App.css";
import Input from "./components/inputComp";
import useCurrencyApi from "./hooks/useCurrencyApi";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("");
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [read, setRead] = useState(true);


  const res = useCurrencyApi(from);
  const options = Object.keys(res);

  // Convert
  const convert = () => {
    setToAmount(fromAmount*res[to])
  }

  // Swap
  const swap = () => {
      setFrom(to);
      setTo(from);
  }

  return (
    <>
      <div
        className="back w-full h-screen bg-cover flex"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg")`,
        }}
      >
        <div className="bg-white w-2/3 m-auto p-5 rounded ">
          <h1 className="text-4xl text-center mb-2">Currency Converter</h1>
          <form onSubmit={(e)=> {
            e.preventDefault();
            convert()
          }}>
            <Input
              label="From"
              amount={fromAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setFromAmount(amount)}
            />

            <div className="flex flex-col items-center ">
              <button className="bg-blue-600 p-3 rounded text-white hover:bg-blue-300" 
              onClick={() => swap()}>
                SWAP
              </button>
            </div>

            <Input
              label="To"
              amount={toAmount}
              allowChanege={read}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
            />

            <div className="flex flex-col items-center mt-3">
              <button className="bg-blue-600 p-3 rounded text-white w-full hover:bg-blue-300" type="submit">
                Convert from {from} to {to}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
