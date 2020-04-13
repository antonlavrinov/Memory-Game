import React from 'react';
import {CSSTransition} from 'react-transition-group';
// import memoryGame from '../images/memory-game.png';
// import menuDialog from '../images/dialog_menu.png';

const MainMenuPopup = ({menu, chooseDifficulty}) => {
    return(
        <CSSTransition classNames="popup__modal" unmountOnExit in={menu} timeout={300}>
            <div className="main-menu">
                <img src={`images/dialog_menu.png`} alt="dialog" className="dialog dialog_menu"/>
                <img className={`devil__image devil__image_menu`} src={`images/devil1.png`} alt="devil"/>
                <img src={`images/memory-game.png`} alt="memory-game" className="main-menu__logo"/>
                <div style={{
                    backgroundImage: 'url(images/menu_background.jpg)'
                }} className="main-menu__overlay">
                </div>
                <div className="modal">
                            
                            <div className="modal__text-block">
                                Don’t let the Fat Devil steal all your sweets!
                                Match the cards <br/> on board till the time runs out.
                            </div>
                            <div className="modal__buttons-block">
                                <button className='button button_menu button_brown' onClick={() => chooseDifficulty('simple')}>Simple</button>
                                <button className='button button_menu button_purple' onClick={() => chooseDifficulty('regular')}>Regular</button>
                                <button className='button button_menu button_orange' onClick={() => chooseDifficulty('expert')}>Expert</button>
                            </div>

                </div>

            </div>
        </CSSTransition>
    )
}

export default MainMenuPopup;