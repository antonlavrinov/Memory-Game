import React from 'react';
import ReactCardFlip from 'react-card-flip';


const Card = ({ cardToCheck, card, flipCard, matchedCards, disabled }) => {

    const cardBackStyle = {
        opacity: `${matchedCards ? '0' : '1'}`,
        transition: 'all 0.5s ease',
        marginTop: `${matchedCards ? '-10px' : '0'}`,
        marginBottom: `${matchedCards ? '10px' : '0'}`,
        cursor: `${matchedCards ? 'auto' : 'pointer'}`,
        userSelect: 'none'
    }

    const cardFrontStyle = {
        backgroundImage: `url(${card.url})`,
        backgroundSize: 'cover'
    }

    return (
        <ReactCardFlip className='noSelect'
            containerStyle={cardBackStyle}
            isFlipped={matchedCards || cardToCheck}
            flipSpeedBackToFront={0.3}
            flipSpeedFrontToBack={0.3}
        >

            <div onClick={() => disabled ? null : flipCard(card)} className="card card_back" ></div>
            <div onClick={() => disabled ? null : flipCard(card)} style={cardFrontStyle} className="card card_front"></div>

        </ReactCardFlip>
    )
}

export default Card;