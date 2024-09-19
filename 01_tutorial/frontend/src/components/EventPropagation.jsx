import React from 'react'

const EventPropagation = () => {
  const handleGrandParent =()=>{
    
    console.log("Grand Parent clicked")
  };
  const handleParenClick = () => {
   
    console.log('Parent clicked')
  };
  const handleChildClick = (event) =>{
    console.log(event);
    event.stopPropagation();
    console.log('child clicked')
  }

  return (
    <section className='main-div'> 
        <div className='g-div' onClickCapture={handleGrandParent}>
          <div className='p-div' onClickCapture={handleParenClick}>
            <button className='c-div' onClickCapture={handleChildClick}>Child dev</button>
          </div>
        </div>
    </section>
  )
}

export default EventPropagation