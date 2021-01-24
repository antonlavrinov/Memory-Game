import React from 'react';
import { CSSTransition } from 'react-transition-group';


const Curtain = ({ curtain }) => {

    return (
        <CSSTransition in={curtain} unmountOnExit timeout={300} classNames='fade'>
            <div className="curtain"></div>
        </CSSTransition>
    )
}

export default Curtain;