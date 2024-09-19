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
  const decrement = ()=> {
    setCount (() => {
        return (
            count - 1
            )
    })
    
   
  }
  return (
    <div className='flex-cols'>
        <p className='text'>{count}</p>
        <div className='grid grid-cols-3 gap-4'>
        <button onClick={handleButtonClick} className='outline outline-offset-2 outline-pink-500'>Increment</button>

        <button onClick={decrement} className="outline outline-offset-2 outline-pink-500">decrement</button>
        </div>
    </div>
  )
}

export default State