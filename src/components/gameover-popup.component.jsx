import React from 'react';
import {CSSTransition} from 'react-transition-group';
import gameOverImg from '../images/game-over.png';

const GameOverPopup = ({gameOver, tryAgain, goToMenu}) => {
    return(
        <CSSTransition classNames="popup__modal" unmountOnExit in={gameOver} timeout={300}>
            <div className="popup popup_victory">
                <div className="popup__overlay">
                    <div className="modal modal_result">
                        <div className="modal__text-block modal__text-block_result">
                            <img className="modal__result-img modal__result-img_gameOver" src={`images/game-over.png`} alt="victory"/>
                        </div>
                        <div className="modal__buttons-block modal__buttons-block_result">
                            <button className="button button_brown button_result" onClick={() => goToMenu()}>Menu</button>
                            <button className="button button_orange button_result" onClick={() => gameOver ? tryAgain() : null}>Start again</button>
                        </div>
                        

                    </div>
                </div>

            </div>
        </CSSTransition>
    )
}

export default GameOverPopup;