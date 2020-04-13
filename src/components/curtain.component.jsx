import React from 'react';
import {CSSTransition} from 'react-transition-group';
const Curtain = ({game, menu}) => {
    return (
        <CSSTransition in={!game && !menu} unmountOnExit timeout={300} classNames='fade'>
            <div className="curtain"></div> 
        </CSSTransition>
        
    )
}

export default Curtain;