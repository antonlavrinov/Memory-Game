import React from 'react';
import ReactCardFlip from 'react-card-flip';


const Card = ({cardToCheck, card, flipCard, matchedCards, disabled}) => {
    console.log(card.url)
    return(
        <ReactCardFlip className='noSelect' containerStyle={{

                                    // display: `${matchedCards ? 'none' : 'block'}`,
                                    opacity: `${matchedCards ? '0' : '1'}`,
                                    transition: 'all 0.5s ease',
                                    marginTop: `${matchedCards ? '-10px' : '0'}`,
                                    marginBottom: `${matchedCards ? '10px' : '0'}`,
                                    cursor: `${matchedCards ? 'auto' : 'pointer'}`,
                                    userSelect: 'none'
                                    }}  
            isFlipped={matchedCards || cardToCheck} flipSpeedBackToFront={0.3} flipSpeedFrontToBack={0.3}>
            <div onClick={() => disabled ? null : flipCard(card)}  className="card card_back" ></div>
            <div onClick={() => disabled ? null : flipCard(card)} style={{
                                                                            backgroundImage: `url(${card.url})`,
                                                                            backgroundSize: 'cover'
                                                                            }} className="card card_front"></div>

        </ReactCardFlip>
    )
}

export default Card;