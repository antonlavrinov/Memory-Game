import React from 'react';
import Board from './board.component';
import VictoryPopup from './victory-popup.component';
import GameOverPopup from './gameover-popup.component';
import MainMenuPopup from './main-menu-popup.component';
import TopLine from './top-line.component';
import Spinner from './_spinner.component';
import Devil from './devil.component';
import Curtain from './curtain.component';
import AudioController from '../music.utils';
import shadow from '../images/shadow.png';
import {levels} from '../levels';

class Game extends React.Component {

    audioController = new AudioController();
    
    shuffleCards = (a) => {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;      
    }

    componentDidUpdate() {
        console.log('I updated')
    }

    // preloadImages = () => {
    //     const imagesArray = ['background.jpg', 
    //                         'menu_background.jpg',
    //                          'candy.jpg',
    //                          'cookie.jpg',
    //                          'cracker.jpg',
    //                          'croissant.jpg',
    //                          'donut.jpg',
    //                          'roll.jpg',
    //                          'cake.jpg',
    //                         'victory.png',
    //                         'game-over.png',
    //                         'memory-game.png',
    //                         'card_back4.jpg',
    //                         'devil_outglow.png',
    //                         'devil1.png',
    //                         'dialog_menu.png',
    //                         'shadow.png'
    //     ];
    //     const loadedImages = [];
    //     imagesArray.map((srcc) => {
    //         console.log(srcc)
    //         const src = `/images/${srcc}`
    //         const img = new Image();
    //         img.src = src
    //         img.onload = loadedImages.push(srcc)
    //         console.log(img)
    //     });

    //     if(loadedImages.length === 17) {
    //         setTimeout(() => {
    //             this.setState({loaded: true})
    //             console.log('LOADED')
    //         }, 1500)

    //     }
    // }

    // componentDidMount() {
    //     this.preloadImages()
    // }


    state = {
        cards: [],
        cardToCheck: [],
        matchedCards: [],
        disabled: true,
        victory: false,
        gameOver: false,
        menu: true,
        timeRemaining: null,
        level: '',
        game: false,
        sound: true,
        // loaded: false
    }

    soundOff = () => {
        this.audioController.volumeOff();
    }

    countDown;

    goToMenu = () => {
        this.setState({menu: true})
        this.setState({cardToCheck: []});
        this.setState({matchedCards: []});
        this.setState({disabled: false});
        this.setState({gameOver: false});
        this.setState({victory: false});
        clearInterval(this.countDown);
        this.audioController.stopBackground();
        this.setState({game: false})
    }

    startCountDown = () => {
        return setInterval(() => {
            console.log('tick')
            console.log(this.state.timeRemaining)
            this.setState(({timeRemaining}) => {
                let neww = timeRemaining;
                neww--;
                return {
                    timeRemaining: neww
                }
            });
            if (this.state.timeRemaining === 0) {
                this.gameOver()
            }
        }, 1000);
    }

    chooseDifficulty = (difficulty) => {
        this.setState({
            level: difficulty
        });
        let sweets;
        if (difficulty === 'simple') {
            sweets = levels[0].cards;
        }
        if (difficulty === 'regular') {
            sweets = levels[1].cards;
        }
        if (difficulty === 'expert') {
            sweets = levels[2].cards;
        }
        this.setState({
            cards: sweets
        }, this.startGame(difficulty));    
    }

    startGame = (difficulty) => {
        let time;
        if (difficulty === 'simple') {
            time = 25;
        } 
        if (difficulty === 'regular') {
            time = 30;
        } 
        if (difficulty === 'expert') {
            time = 90;
        } 
        this.setState({cardToCheck: []});
        this.setState({matchedCards: []});
        this.setState({disabled: true});
        this.setState({menu: false});
        this.setState({timeRemaining: time});
        this.setState({game: true})
        setTimeout(() => {
            const shuffled = this.shuffleCards(this.state.cards)
            this.setState({cards: shuffled})
            this.audioController.playBackground();
            this.setState({disabled: false});
            this.countDown = this.startCountDown();
            this.audioController.devilVoice();
        }, 500)
    }

    tryAgain = () => {
        let time;
        if (this.state.level === 'simple') {
            time = 25;
        } 
        if (this.state.level === 'regular') {
            time = 30;
        } 
        if (this.state.level === 'expert') {
            time = 90;
        } 
        this.setState({victory: false})
        this.setState({gameOver: false})
        clearInterval(this.countDown);
        this.setState({cardToCheck: []});
        this.setState({matchedCards: []});
        this.setState({disabled: true});
        this.setState({timeRemaining: time});
        this.setState({game: false})
        this.audioController.pause();
        setTimeout(() => {
            const shuffled = this.shuffleCards(this.state.cards)
            this.setState({cards: shuffled})
            this.setState({game: true})
            this.audioController.playBackground();
            this.setState({disabled: false});
            this.countDown = this.startCountDown();
            this.audioController.devilVoice();
        }, 500)
    }

    victory = () => {
        clearInterval(this.countDown);
        this.setState({victory: true})
        this.setState({game: false})
        this.audioController.victoryPlay()
        this.audioController.stopBackground();
    }

    gameOver = () => {
        clearInterval(this.countDown);
        this.setState({gameOver: true})
        this.setState({game: false})
        this.audioController.gameOverLaugh();
        this.audioController.stopBackground();
    }

    menu = () => {
        this.setState({gameOver: false})
        this.setState({victory: false})
        this.setState({menu: true})
        this.setState({game: false})
    }

    setCardToCheck = (card) => {
        console.log(card)
        this.setState({cardToCheck: [...this.state.cardToCheck, card]})
    }

    checkForCardMatch = (card) => {
        if (card.name === this.state.cardToCheck[0].name) {

            this.cardMatch(card, this.state.cardToCheck[0])
        } else {
            this.cardMisMatch();
        }
        setTimeout(() => {
            this.setState({cardToCheck: []});
            this.setState({disabled: false})
        }, 350);
    }

    cardMisMatch = () => {
        this.setState({disabled: true})
        setTimeout(() => {
            this.setState({cardToCheck: []});
            this.setState({disabled: false})
        }, 350);
    }



    cardMatch = (card1, card2) => {
        setTimeout(() => {
            this.audioController.cardMatch()
            this.setState({matchedCards: [...this.state.matchedCards, card1, card2]});
            if(this.state.matchedCards.length === this.state.cards.length && this.state.gameOver === false) {
                clearInterval(this.countDown);
                setTimeout(() => this.victory(), 400)
            }
        }, 350);
    }

    flipCard = (card) => {
        console.log('flipped!')
        console.log(this.state.matchedCards)
        console.log(this.audioController)
        this.audioController.cons()
        this.audioController.flip()
        if (this.canFlipCard(card)) {
            console.log('passed')
            if (this.state.cardToCheck.length > 0 && this.state.cardToCheck.length < 2) {
                this.setState({disabled: true})
                this.setCardToCheck(card)
                this.checkForCardMatch(card)
                console.log(this.state.cardToCheck.length)
            } else {
                console.log('set')
                this.setState({disabled: false})
                this.setCardToCheck(card)
            }
        } else {
            this.setState({cardToCheck: []})
        }
    }

    canFlipCard = (card) => {
        return !this.state.disabled && !JSON.stringify(this.state.matchedCards).includes(card.id) && !JSON.stringify(this.state.cardToCheck).includes(card.id);
    }


    render() {
        // const content = 
        // ) : (
        //         <Spinner/>



        // )
        return(
            <div className="game">
                <div className="container">
                    <Curtain game={this.state.game} menu={this.state.menu}/>
                    <div className="shadow-block">
                    </div>
                    <img src={shadow} alt="shadow" className="shadow"/>
                    <TopLine level={this.state.level} tryAgain={this.tryAgain} goToMenu={this.goToMenu} game={this.state.game} timeRemaining={this.state.timeRemaining}/>
                    <MainMenuPopup chooseDifficulty={this.chooseDifficulty} menu={this.state.menu} startGame={this.startGame}/>
                    <GameOverPopup goToMenu={this.goToMenu} gameOver={this.state.gameOver} tryAgain={this.tryAgain}/>
                    <VictoryPopup goToMenu={this.goToMenu} victory={this.state.victory} tryAgain={this.tryAgain}/>
                    <Devil game={this.state.game}/>  
                    <Board cardToCheck={this.state.cardToCheck} 
                        flipCard={this.flipCard} 
                        cards={this.state.cards}
                        matchedCards={this.state.matchedCards}
                        disabled={this.state.disabled}
                        timeRemaining={this.state.timeRemaining}
                        level={this.state.level}
                        soundOff={this.soundOff}
                        game={this.state.game}
                        />
                </div>
            </div>
        )
    }
}

export default Game;