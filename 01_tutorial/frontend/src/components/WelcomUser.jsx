import React from 'react'

const WelcomUser = (props) => {
    const {onClick, onMouseEnter} = props
    const handleGreeting = ()=>{
        console.log(`Hey User, Welcome`);
        props.onClick();
    };
  return (
    <div>
        <button onClick={onClick}>Click me</button>
        <button onMouseEnter={onMouseEnter}>Hover me</button>
        <button onClick={handleGreeting}>Greeting</button>
    </div>
  )
}

export default WelcomUser