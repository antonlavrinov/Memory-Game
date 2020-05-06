import React from 'react';
import {CSSTransition} from 'react-transition-group';
import victoryImg from '../images/victory-min.png';
import devilVictory from '../images/devil_victory-min.png';
import dialogTail from '../images/dialog_tail-min.png';
import {withTranslation} from 'react-i18next';
import parse from 'html-react-parser';

const VictoryPopup = ({victory, tryAgain, goToMenu, userCandies, t}) => {
    const lastCandy = userCandies[userCandies.length - 1]
    return(
        <CSSTransition classNames="popup__modal_result" unmountOnExit in={victory} timeout={300}>
            <div className="popup popup_victory">
                <div className="popup__shine"></div>
                <div className="popup__overlay popup__overlay_result">
                    <div className="modal modal_result">
                        <img src={devilVictory} alt="devilVictory" className={`devil_result devil_result_victory`}/>
                        <div className="dialog dialog_victory">
                            <div className="dialog__text dialog__text_victory">{parse(t('dialogues.dialogueVictory'))}</div>
                            <img src={dialogTail} alt="dialogTail" className="dialog__tail"/>
                        </div>
                        <div className="modal__frame">
                            <div className="modal__result-img-block">
                                <img className="modal__result-img" src={victoryImg} alt="victory"/>
                                <div className="gift-block">
                                    <img className="gift-block__img" src={lastCandy ? lastCandy.url : null} alt="candy"/>
                                    <div className="shine_mini"></div>
                                    <div className="gift-block__title">{t('gift')}</div>
                                </div>
                            </div>
                            <div className="modal__buttons-block modal__buttons-block_result">
                                <button className="button button_brown button_result" onClick={() => goToMenu()}>{t('menu')}</button>
                                <button className="button button_orange button_result" onClick={() => victory ? tryAgain() : null}>{t('startAgain')}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}

export default withTranslation()(VictoryPopup);