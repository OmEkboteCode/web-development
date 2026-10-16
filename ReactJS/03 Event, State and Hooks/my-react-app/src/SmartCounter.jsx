import { useState } from "react";

export default function SmartCounter() {
  const [count, setCount] = useState(0);

  let increment = () => {
    setCount(previousCount => previousCount + 1);
  };
  let decrement = () => {
    setCount(previousCount => previousCount - 1);
  };
  let addThree = () => {
    setCount(previousCount => previousCount+1);
    setCount(previousCount => previousCount+1);
    setCount(previousCount => previousCount+1);
  };
  let reset = () => {
    setCount(0);
  };

  return(
    <div>
        <h3>SMART COUNTER</h3>
        <h1>{count}</h1>
        <p>{count>0? "Count is Positive": count<0? "Count is Negative": "Count is Zero"}</p>
        <button onClick={decrement}>- Decrement</button>  
        <button onClick={increment}>+ Increment</button>
        <br />
        <button onClick={reset}>Reset</button>
        <button onClick={addThree}>+3</button>
    </div>
  )
}
