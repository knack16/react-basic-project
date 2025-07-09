import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/UseCurrencyInfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundColor:"#000"
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert()
              }}
            >
              <div className="w-full mb-1">
                <InputBox 
                  label="From" 
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency)=>{setFrom(currency);setConvertedAmount(0); }}
                  selectCurrency={from}
                  onAmountChange={(amount)=>{setAmount(Number(amount));console.log(amount)}}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={()=>{swap()}}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox 
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency)=>{setTo(currency)}}
                  selectCurrency={to}
                  amountDisable 
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg mt-5"
                onClick={(e) => {
                  e.preventDefault();
                  setAmount(0);
                  setFrom("usd");
                  setTo("inr");
                  setConvertedAmount(0);
                }}
              >
                Clear All
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
