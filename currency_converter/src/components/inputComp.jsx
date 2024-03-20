


function Input({
  label,
  amount,
  allowChanege,
  currencyOptions=[],
  onCurrencyChange,onAmountChange}) {
  return (
    <>
      <div className="flex flex-wrap bg-gray-100 p-5 rounded space-x-4 justify-between items-center">
        <div className=" ">
          <p>{label}</p>
          <input
            type="number"
            className=" h-12 border-0 p-5 focus:outline-none"
            value={amount}
            readOnly={allowChanege}
            onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
          />
        </div>
        <div className=" ">
          <p>Currency</p>
          
          <select name="" id="" className="focus:outline-none" onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
            <option value="" selected>Select {label} currency</option>
            {currencyOptions.map((currency)=>(
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default Input;
