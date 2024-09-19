import React, { useState } from 'react'

const State = () => {
    // let value = 0;
    // const handlevalue = () =>{
    //     value ++;
    //     console.log(value);
    // }
    const [count, setCount] =useState(0);
  const handleButtonClick = ()=> {
    setCount (() => {
        return (
            count + 1
            )
    })
   
  }
  return (
    <div>
        <p>{count}</p>
        <button onClick={handleButtonClick}>Increment</button>
    </div>
  )
}

export default State