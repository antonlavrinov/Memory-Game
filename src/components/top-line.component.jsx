import React from 'react';
import ProgressBar from './progress-bar.component';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faRedoAlt} from '@fortawesome/free-solid-svg-icons';
import {CSSTransition} from 'react-transition-group';


const TopLine = ({game, timeRemaining, goToMenu, tryAgain, level}) => {
    const topLineStyle = game ? '' : 'top-line_disabled';
    return (
        <CSSTransition in={game} unmountOnExit timeout={300} classNames='fade'>
            <div className={`top-line ${topLineStyle}`}>
                <div className="top-line__buttons">
                    <button onClick={() => goToMenu()} className="button button_orange button_top-line"><FontAwesomeIcon icon={faHome}/></button>
                    <button onClick={() => tryAgain()} className="button button_brown button_top-line"><FontAwesomeIcon icon={faRedoAlt}/></button>
                </div>

                <ProgressBar timeRemaining={timeRemaining} level={level}/>
            </div>
        </CSSTransition>

    )
}

export default TopLine;