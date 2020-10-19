import React from 'react'
import {ReactComponent as NotFound} from '../images/search_not-found.svg';
import { DragDropContainer} from 'react-drag-drop-container';
import {withTranslation} from 'react-i18next';
import parse from 'html-react-parser';




const CandyBag = ({userCandies, pickCandy, t}) => {

    return (
        <div className="candy-bag">
            <div className="candy-bag-modal__collection">
                {!userCandies.length ? ( <div className="candy-bag__not-found">
                        <NotFound className="candy-bag__search-icon"/>
                        <div className="candy-bag__not-found-title">
                            {t('emptyCandyBag.title')}
                        </div>
                        <div className="candy-bag__not-found-descr">
                            {parse(t('emptyCandyBag.tutorial'))}
                        </div>
                    </div> ) : (null)}
                <div className="candy-bag-modal__candies-grid">
                    {userCandies.map((candy, index) => {
                        return (
                            <div onClick={() => pickCandy()}  key={index} className="candy-bag-modal__candy-slot">
                                <DragDropContainer  targetKey="foo"
                                                   dragData={candy}
                                                   
                                                   >
                                    <img src={candy.url} alt="candy" className="candy-bag-modal__candy-img"/>
                                </DragDropContainer>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )

}

export default withTranslation()(CandyBag);