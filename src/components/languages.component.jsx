import React from 'react';


const Languages = ({ changeLanguage }) => {
    return (
        <div className="languages">
            <button className="button languages__button languages__button_ru" onClick={() => changeLanguage('ru')}></button>
            <button className="button languages__button languages__button_en" onClick={() => changeLanguage('en')}></button>
        </div>
    )
}

export default Languages;