import React from 'react'
import AiSide from '../aiSide/AiSide'
import UserSide from '../userSide/UserSide'
import { useState } from 'react';

function MainPart() {
    const [totalMatches, setTotalMatches] = useState(25);
    const [aiMatches, setAiMatches] = useState(0);
    const [userMatches, setUserMatches] = useState(0);
    const [currentPlayer, setCurrentPlayer] = useState(true);
  
    // const switchPlayer = () => {
    //   setCurrentPlayer((prevPlayer) => (prevPlayer === "Player" ? "AI" : "Player"));
    // };
  
    // const isGameOver = () => {
    //   return totalMatches <= 0;
    // };
  
    // const determineWinner = () => {
    //   if (totalMatches % 2 === 0) {
    //     setWinner(currentPlayer === "Player" ? "Player" : "AI");
    //   } else {
    //     setWinner(currentPlayer === "Player" ? "AI" : "Player");
    //   }
    // };
  
    // const handlePlayerTurn = (matches) => {
    //   if (!isGameOver() && currentPlayer === "Player") {
    //     if (matches >= 1 && matches <= 3 && matches <= totalMatches) {
    //       setTotalMatches((prevTotalMatches) => prevTotalMatches - matches);
    //       switchPlayer();
    //     } else {
    //       console.log("Invalid move! Try again.");
    //     }
    //   }
    // };
  
    // const handleAITurn = () => {
    //   if (!isGameOver() && currentPlayer === "AI") {
    //     let matches = Math.min(totalMatches, 3);
    //     matches = Math.max(1, matches);
    //     setTotalMatches((prevTotalMatches) => prevTotalMatches - matches);
    //     switchPlayer();
    //   }
    // };
  
    // const renderGameStatus = () => {
    //   if (isGameOver()) {
    //     return <div>Game over. {determineWinner()} wins!</div>;
    //   } else {
    //     return <div>Total matches: {totalMatches}</div>;
    //   }
    // };
    ///////////////////////////////////////////////////////////
    const AiResponse = <div>
        <h2>Ai chose smt...</h2>
        <button onClick={() => aiTurn()}>continue</button>
    </div>

    const aiTurn = () => {
        if(!currentPlayer){
            if(aiMatches % 2 == 0){
                setTotalMatches(matches => matches - 2);
                setAiMatches(aiMatches => aiMatches + 2);
            }else if(totalMatches > 3){
                setTotalMatches(matches => matches - 3);
                setAiMatches(aiMatches => aiMatches + 3);
            }else{
                setTotalMatches(matches => matches - 1);
                setAiMatches(aiMatches => aiMatches + 1);
            }  
            setCurrentPlayer(true);
        }else{
            console.log('try Again')
        }
    }

    const myTurn = (n) => {
        if(currentPlayer && n >= 1 && n <= 3){
            setTotalMatches(matches => matches - n);
            setUserMatches(userMatches => userMatches + n);
            setCurrentPlayer(false);
            
        }else{
            console.log('try Again')
        }
    }

    const gameOver = () => {
        if(userMatches % 2 == 0){
            return (<h1>YOU win</h1>)
        }else{
            return(<h1>AI win</h1>)
        }
    }

    return (
      <div>
        {totalMatches}
        <div>
          <label>How many matches do you want to take?</label>
      
          <button onClick={() => myTurn(1)}>1</button>
          <button onClick={() => myTurn(2)}>2</button>
          <button onClick={() => myTurn(3)}>3</button>
        </div>
        {}
        <h2>my {userMatches}</h2>
        <h2 onClick={() => aiTurn(1)}>AI {aiMatches}</h2>
        {!currentPlayer && AiResponse }
        {totalMatches == 0 && gameOver()}
      </div>
    );
}

export default MainPart
