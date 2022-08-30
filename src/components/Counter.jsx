import React, { useState } from 'react'

const Counter = () => {
  const [count,setCount] = useState(0);
  
  function increment(){
     setCount(count+1)
  }
  function decrement(){
    setCount(count-1)
 }
  return (
    <div>
      <div>{count}</div>
      <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      </div>

    </div>
  )
}

export default Counter