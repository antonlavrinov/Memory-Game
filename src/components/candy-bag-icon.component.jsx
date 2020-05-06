import React from 'react'
import pumpkin from '../images/pumpkin-min.png';
import {withTranslation} from 'react-i18next';

const CandyBagIcon = ({toggleCandyBagHidden, userCandies, slideDoorSound, t}) => {
    return (
        <div className="candy-bag">

            <div onClick={() => {toggleCandyBagHidden(); slideDoorSound()}} className="candy-bag__bag">

                <div className="candy-bag__image-block">
                    <img src={pumpkin} className="candy-bag__pumpkin" alt=""/>
                    <div className="candy-bag__count">
                        {userCandies.length}
                    </div>
                </div>
                <div className="candy-bag__title">{t('candyBag')}</div>
            </div>
        </div>
    )
}

export default withTranslation()(CandyBagIcon);