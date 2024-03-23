import { useState } from 'react'
import InputBox from './components/InputBox'
import UsecurrencyInfo from './hook/UsecurrencyInfo'


function App() {

  const [Amount, setamount] = useState(0)
  const [from,setfrom] = useState("usd")
  const [to,setto] = useState("inr")
  const[convert,setconvert] = useState(0)

  const currencyinfo = UsecurrencyInfo(from)
  const options = Object.keys(currencyinfo)

  const swap = ()=>{
    setfrom(to)
    setto(from)
    setamount(convert)
    setconvert(Amount)

  }

  const conv = () =>{
    setconvert(Amount*currencyinfo[to])
  }
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('data:image/jpeg;base64,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')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        conv()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount = {Amount}
                            selectcurrency={from}
                            currencyoptions = {options}
                            oncurrencychange = {(currency)=>setfrom(currency)
                            }
                            onAmountchange={(Amount)=>setamount(Amount)}

                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                           label="To"
                           amount = {convert}
                           currencyoptions = {options}
                           oncurrencychange = {(currency)=>setto(currency)
                           }
                           selectcurrency={to}
                           amountdisable
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App
