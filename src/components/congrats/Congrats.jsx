import React from 'react'
import './congrats.scss'
import party from '../img/party.png'
function Congrats({winner}) {

    let winText = "Dear User you are looser, AI is smarter!"

    if(winner){
        winText = "Dear User you are smarter then computer, stupid iron can`t figth with you! "
    }
  return (
    <div className='congrats'>
        <div className="congrats_inner">
            <div className="congrats_header">
                <h1>Congratulations!!!</h1>
            </div>
            <div className="congrats_text">
                <h2>
                    {winText}<br/>
                    but don`t worry you can try again<br/>
                    <img src={party} alt="" />
                </h2>
            </div>
            <div className="congrats_footer">
                    <button>
                        TRY AGAIN
                    </button>
            </div>
        </div>
    </div>
  )
}

export default Congrats;
