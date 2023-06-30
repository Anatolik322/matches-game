import React from 'react'
import Congrats from '../congrats/Congrats'
import Header from '../header/Header'
import './main.scss'
import party from '../img/party.png'
import cool from '../img/cool.gif'
import box from '../img/box.png'
import { useState } from 'react';

function MainPart({togle}) {

    const [totalMatches, setTotalMatches] = useState(25);
    const [aiMatches, setAiMatches] = useState(0);
    const [userMatches, setUserMatches] = useState(0);
    const [currentPlayer, setCurrentPlayer] = useState(true);
    const [togleAi, setTogleAi] = useState(false);

    let AiResponse = <div className='aiResponse'>
        <h2>Ai chose smt...</h2>
        <img src={cool} alt="cool face" />
        <button className='main_button' onClick={() => aiTurn()}>continue</button>
    </div>

    const aiTurn = () => {
        if (!currentPlayer && totalMatches !== 0) {
            if (userMatches % 2 == 0 && totalMatches == 1) {
                setTotalMatches(matches => matches - 1);
                setAiMatches(aiMatches => aiMatches + 1);
            }
            else if (aiMatches % 2 == 0 && totalMatches > 2) {
                setTotalMatches(matches => matches - 2);
                setAiMatches(aiMatches => aiMatches + 2);
            } else if (totalMatches > 3) {
                setTotalMatches(matches => matches - 3);
                setAiMatches(aiMatches => aiMatches + 3);
            } else if (totalMatches == 1) {
                setTotalMatches(matches => matches - 1);
                setAiMatches(aiMatches => aiMatches + 1);
            }
            setCurrentPlayer(true);
        } else {
            console.log('try Again')
        }
    }

    const myTurn = (n) => {
        if (currentPlayer && n >= 1 && n <= 3 && n <= totalMatches) {
            setTotalMatches(matches => matches - n);
            setUserMatches(userMatches => userMatches + n);
            setCurrentPlayer(false);
            if (totalMatches == 0) {
                setCurrentPlayer(true);
            }

        } else {
            console.log('try Again')
        }
    }

    const reset = () => {
        setTotalMatches(25);
        setUserMatches(0);
        setCurrentPlayer(true);
        setAiMatches(0)
    }

    // const gameOver = () => {
    //     return userMatches % 2 == 0 ?
    //         <div className='winner'>
    //             <h1>YOU win</h1>
    //             <img src={party} alt="party" />
    //             <button className='main_button' onClick={() => reset()}>Try Again</button>
    //         </div> :
    //         <div className='winner'>
    //             <h1>AI win</h1> <img src={party} alt="party" />
    //             <button className='main_button' onClick={() => reset()}>Try Again</button>
    //         </div>
    // }

    // if (totalMatches === 0) {
    //     AiResponse =
    //         <div className='aiResponse'>
    //             {userMatches % 2 == 0 ? <><h1>YOU win</h1> <img src={party} alt="party" /></> : <><h1>AI win</h1> <img src={party} alt="party" /></>}
    //             <button className='main_button' onClick={() => reset()}>Try Again</button>
    //         </div>
    // }
    
    return (
        totalMatches == 0 ? <Congrats reset = {reset} winner={userMatches % 2 == 0 ? true : false}/>:
        <>
            <Header togle = {togleAi} setToggle = {setTogleAi}/>
            <div className='main'>
                <div className='matches_box'>
                    <img src={box} alt="box" />
                    <h1>Total matches: {totalMatches} </h1>
                </div>
                <div className='user_part'>
                <span >How many matches do you want to take?</span><br/>
                    <div className="buttons">
                        <button className='user_number' onClick={() => myTurn(1)}>1</button>
                        <button className='user_number' onClick={() => myTurn(2)}>2</button>
                        <button className='user_number' onClick={() => myTurn(3)}>3</button>
                    </div>
                    <h2>My matches: {userMatches}</h2>
                {!togleAi && <h2>AI matches: {aiMatches}</h2>}
                </div>
            
                
                {!currentPlayer && AiResponse }
                {/* {totalMatches == 0 && gameOver()} */}
            </div>
        </>
    );
}

export default MainPart
