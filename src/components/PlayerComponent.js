import React, { useState } from 'react';
import './PlayerComponent.css';


const Player = ({ playerNumber, playerScore, activePlayer, playerBreak, playerBreaks, playerName }) => {

    // const [ playerName, setPlayerName ] = useState( "" );

    const handleSubmit = ( event ) => {
        event.preventDefault();
        // alert(`Submitting Name ${playerName}`)
    }



return (
    <>
    
<div className="player-container">
    {/* <form onSubmit={ handleSubmit }>
        <label>
            Name:
        <input type="text" value={ playerName } 
        onChange={ event => setPlayerName( event.target.value )}
        placeholder="Enter Name"  required/> 
        
        <input type="submit" value="Submit" />  
        </label> 
    </form> */}
    {console.log("active player", activePlayer)}
    <h1 className={activePlayer === playerNumber ? "active-player" : "non-active-player"}> { playerName }</h1>
    
    <h2 className={activePlayer === playerNumber ? "active-player" : "non-active-player"}>Score: { playerScore }</h2>

    <h2 className={activePlayer === playerNumber ? "active-player" : "non-active-player"}> Break: { playerBreak } </h2>

    <h2 className={activePlayer === playerNumber ? "active-player" : "non-active-player"}>Highest Break: { playerBreaks[0] } </h2>
</div>
    
    </>


)
};

export default Player;