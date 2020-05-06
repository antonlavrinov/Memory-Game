import React from 'react';
import ProgressBar from './progress-bar.component';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faRedoAlt} from '@fortawesome/free-solid-svg-icons';
import {CSSTransition} from 'react-transition-group';


const BottomLine = ({game, timeRemaining, goToMenu, tryAgain, level}) => {
    const topLineStyle = game ? '' : 'bottom-line_disabled';
    return (
        <CSSTransition in={game} unmountOnExit timeout={300} classNames='fade'>
            <div className={`bottom-line ${topLineStyle}`}>
                <div className="bottom-line__buttons">
                    <button onClick={() => goToMenu()} className="button button_orange button_bottom-line"><FontAwesomeIcon icon={faHome}/></button>
                    <button onClick={() => tryAgain()} className="button button_brown button_bottom-line"><FontAwesomeIcon icon={faRedoAlt}/></button>
                </div>

                <ProgressBar timeRemaining={timeRemaining} level={level}/>
            </div>
        </CSSTransition>

    )
}

export default BottomLine;