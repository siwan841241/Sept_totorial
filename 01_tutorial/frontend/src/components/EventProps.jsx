import React from 'react'
import WelcomUser from './WelcomUser'

const EventProps = () => {
    const HandleWelcomeUser =(user) => {
        alert(`Hey, ${user}`);

    }
    const HandleHover=() => {
        alert(` hey Thanks for hovering me`);
        
    }
  return (
    <div>
        <WelcomUser 
        onBClick={() => HandleWelcomeUser('Vinod')}
        onMouseEnter={HandleHover} / >
    </div>
  )
}

export default EventProps