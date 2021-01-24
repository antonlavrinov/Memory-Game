import React from 'react';
import Card from './card.component';
import { CSSTransition } from 'react-transition-group';

const Board = ({ game, cards, cardToCheck, matchedCards, flipCard, disabled, level }) => {

    let style;

    switch (level) {
        case 'simple':
            style = 'card-list__block_simple';
            break;
        case 'regular':
            style = 'card-list__block_regular';
            break;
        case 'expert':
            style = 'card-list__block_expert';
            break;
        default:
            style = '';
    }

    const showBoard = game ? '' : 'card-list_disabled';

    return (
        <CSSTransition in={game} unmountOnExit timeout={300} classNames='fade'>
            <div className={`card-list ${showBoard}`}>
                <div className={`card-list__block  ${style}`}>
                    {cards.map((card, idx) => (
                        <Card key={idx}
                            card={card}
                            cardToCheck={JSON.stringify(cardToCheck).includes(card.id)}
                            matchedCards={JSON.stringify(matchedCards).includes(card.id)}
                            flipCard={flipCard}
                            disabled={disabled || JSON.stringify(matchedCards).includes(card.id)}
                        />
                    ))}
                </div>
            </div>
        </CSSTransition>
    )
}

export default Board;