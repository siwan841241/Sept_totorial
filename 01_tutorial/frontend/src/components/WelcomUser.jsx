import React from 'react'

const WelcomUser = (props) => {
    const {onBClick, onMouseEnter} = props
    const handleGreeting = ()=>{
        console.log(`Hey User, Welcome`);
        props.onClick();
    };
  return (
    <div>
        <button onClick={onBClick}>Click me</button>
        <button onMouseEnter={onMouseEnter}>Hover me</button>
        <button onClick={handleGreeting}>Greeting</button>
    </div>
  )
}

export default WelcomUser