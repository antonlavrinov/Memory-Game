import React from 'react';
import { CSSTransition } from 'react-transition-group';
import gameOverImg from '../images/game-over-min.png';
import devilGameOver from '../images/DEVIL_game-over-min.png';
import dialogGameOver from '../images/dialog_game-over-min.png';
import { withTranslation } from 'react-i18next';


const GameOverPopup = ({ gameOver, tryAgain, goToMenu, t }) => {

    return (
        <CSSTransition classNames="popup__modal_result" unmountOnExit in={gameOver} timeout={300}>
            <div translate="no" className="popup popup_gameOver notranslate">
                <div className="popup__overlay popup__overlay_result">
                    <div className="popup__black">
                    </div>
                    <div className="popup__shine popup__shine_red" />
                    <div className="modal modal_result">
                        <div className="dialog dialog_gameOver">
                            <img src={dialogGameOver} alt="dialog" className="dialog__img" />
                            <div className="dialog__text">{t('dialogues.dialogueGameOver')}</div>
                        </div>
                        <img src={devilGameOver} alt="devilGameOver" className={`devil_result devil_result_gameOver`} />
                        <div className="modal__frame modal__frame_gameOver">
                            <div className="modal__result-img-block modal__result-img-block_gameOver">
                                <img className="modal__result-img modal__result-img_gameOver" src={gameOverImg} alt="victory" />
                            </div>
                            <div className="modal__buttons-block modal__buttons-block_result">
                                <button className="button button_brown button_result" onClick={() => goToMenu()}>{t('menu')}</button>
                                <button className="button button_orange button_result" onClick={() => gameOver ? tryAgain() : null}>{t('startAgain')}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}

export default withTranslation()(GameOverPopup);