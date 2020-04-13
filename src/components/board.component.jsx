import React from 'react';
import Card from './card.component';
import {CSSTransition} from 'react-transition-group';

const Board = ({game, soundOff, cards, cardToCheck, matchedCards, flipCard, disabled, timeRemaining, level}) => {
    // console.log('time remaining is', +timeRemaining)
    let style;
    if (level === 'simple') {
        style = 'card-list__block_simple'
    }
    if (level === 'regular') {
        style = 'card-list__block_regular'
    }
    if (level === 'expert') {
        style = 'card-list__block_expert'
    }
    const showBoard = game ? '' : 'card-list_disabled';
    return (

        <CSSTransition in={game} unmountOnExit timeout={300} classNames='fade'>
            <div className={`card-list ${showBoard}`}>
                    
                    
                    <div className={`card-list__block  ${style}`}>
                        {cards.map((card, idx) => <Card 
                                                key={idx}
                                                card={card}
                                                cardToCheck={JSON.stringify(cardToCheck).includes(card.id)}
                                                matchedCards={JSON.stringify(matchedCards).includes(card.id)}
                                                flipCard={flipCard}
                                                disabled={disabled || JSON.stringify(matchedCards).includes(card.id)}
                                                /> )}
                    </div>
    
    
    
            </div>
        </CSSTransition>

    )
}

export default Board;