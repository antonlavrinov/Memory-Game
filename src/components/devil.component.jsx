import React from 'react';
import devil from '../images/devil1.png'
const Devil = ({game}) => {

    const devilPosition = game ? 'devil__image_up' : '';
    return (
        <div className="devil">
            <div className="container">
                {/* <img className={`devil__image ${devilPosition}`} src={`/images/devil1.png`} alt="devil"/> */}
                <img className={`devil__image ${devilPosition}`} src={devil} alt="devil"/>
            </div>
        </div>
    )  
}

export default Devil;