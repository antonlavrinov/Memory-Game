import React from 'react';
import devil from '../images/devil-min.png'


const Devil = ({ game, victory, gameOver, menu }) => {

    const devilPosition = game ? 'devil__image_up' : '';
    const devilResultPosition = victory || gameOver || menu ? 'devil__image_result' : '';

    return (
        <div className="devil">
            <div className="container">
                <img className={`devil__image ${devilPosition} ${devilResultPosition}`} src={devil} alt="devil" />
            </div>
        </div>
    )
}

export default Devil;