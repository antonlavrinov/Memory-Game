import React from 'react';
import Board from './board.component';
import VictoryPopup from './victory-popup.component';
import GameOverPopup from './gameover-popup.component';
import MainMenuPopup from './main-menu-popup.component';
import BottomLine from './bottom-line.component';
import Devil from './devil.component';
import Curtain from './curtain.component';
import Footer from './footer.component';

import i18next from 'i18next';
import AudioController from '../music';
import {levels} from '../levels';
import {candies} from '../candies';
import ReactGA from 'react-ga';

import shadow from '../images/shadow-min.png';








class Game extends React.Component {

    state = {
        cards: [],
        userCandies: [],
        cardToCheck: [],
        matchedCards: [],
        disabled: true,
        victory: false,
        gameOver: false,
        menu: true,
        timeRemaining: null,
        level: '',
        game: false,
        curtain: false,

        
    }

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
    componentDidMount() {
        ReactGA.initialize('UA-165595407-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
        i18next
            .loadNamespaces("translation")
            .then(() => {
                // localStorage.setItem('userCandies', JSON.stringify(candies));
                if(localStorage.getItem('userCandies')) {
                    const candies = JSON.parse(localStorage.getItem('userCandies'));
                    this.setState({userCandies: candies})   
                }
            });

    }

    setNewUserCandies = (newUserCandies) => {
        this.setState({userCandies: newUserCandies})
        if(this.state.userCandies.length === 0) {
            localStorage.removeItem('userCandies')
        } else {
            localStorage.setItem('userCandies', JSON.stringify(newUserCandies));
        }

    }

    // preloadImages = () => {
    //     // const imagesArray = ['background.jpg', 
    //     //                     'menu_background.jpg',
    //     //                      'candy.jpg',
    //     //                      'cookie.jpg',
    //     //                      'cracker.jpg',
    //     //                      'croissant.jpg',
    //     //                      'donut.jpg',
    //     //                      'roll.jpg',
    //     //                      'cake.jpg',
    //     //                     'victory.png',
    //     //                     'game-over.png',
    //     //                     'memory-game.png',
    //     //                     'card_back4.jpg',
    //     //                     'devil_outglow.png',
    //     //                     'devil1.png',
    //     //                     'dialog_menu.png',
    //     //                     'shadow.png'
    //     // ];
    //     const imagesArray = [gameOverImg, victoryImg]
    //     // const loadedImages = [];
    //     imagesArray.map((srcc) => {
    //         console.log(srcc)
    //         // const src = `../images/${srcc}`
    //         new Image().src = srcc;
    //         // img.src = src
    //         // img.onload = loadedImages.push(srcc)
    //         // console.log(img)
    //     });

    //     // if(loadedImages.length === 17) {
    //     //     setTimeout(() => {
    //     //         this.setState({loaded: true})
    //     //         console.log('LOADED')
    //     //     }, 1500)

    //     // }
    // }

    // componentDidMount() {
    //     this.preloadImages()
    // }


    countDown;
    startCountDown = () => {
        return setInterval(() => {
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

    goToMenu = () => {

        this.setState({cardToCheck: []});
        this.setState({matchedCards: []});
        this.setState({disabled: false});
        this.setState({gameOver: false});
        this.setState({victory: false});
        clearInterval(this.countDown);
        this.audioController.stopBackground();
        this.setState({game: false})
        this.setState({curtain: true})
        setTimeout(() => {
            this.setState({menu: true})
            setTimeout(() => {
                this.setState({curtain: false})
            }, 200)

        }, 300)
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
            time = 35;
        } 
        if (difficulty === 'expert') {
            time = 60;
        } 
        this.setState({cardToCheck: []});
        this.setState({matchedCards: []});
        this.setState({disabled: true});
        this.setState({timeRemaining: time});
        this.setState({curtain: true})
        setTimeout(() => {
            this.setState({menu: false});
        }, 400)
        setTimeout(() => {
            this.setState({game: true})
            this.setState({curtain: false})
            const shuffled = this.shuffleCards(this.state.cards)
            this.setState({cards: shuffled})
            this.audioController.playBackground();
            this.audioController.devilVoice();
            this.setState({disabled: false});
            this.countDown = this.startCountDown();

        }, 600)
    }

    tryAgain = () => {
        let time;
        if (this.state.level === 'simple') {
            time = 25;
        } 
        if (this.state.level === 'regular') {
            time = 35;
        } 
        if (this.state.level === 'expert') {
            time = 60;
        } 
        this.setState({curtain: true})
        this.setState({victory: false})
        this.setState({gameOver: false})
        clearInterval(this.countDown);
        this.setState({cardToCheck: []});
        this.setState({matchedCards: []});
        this.setState({disabled: true});
        this.setState({timeRemaining: time});
        this.setState({game: false})
        this.audioController.stopBackground();
        setTimeout(() => {
            this.setState({curtain: false})
            const shuffled = this.shuffleCards(this.state.cards)
            this.setState({cards: shuffled})
            this.setState({game: true})
            this.audioController.playBackground();
            this.audioController.devilVoice();
            this.setState({disabled: false});
            this.countDown = this.startCountDown();

        }, 500)
    }


    victory = () => {
        ReactGA.event({
            category: 'Result',
            action: 'Victory',
            label: this.state.level
          });
        let rand;
        switch(this.state.level) {
            case 'simple' :
                rand = Math.floor(Math.random() * 3);
                break;
            case 'regular' :
                rand = Math.floor(Math.random() * 3) + 3;
                break;
            case 'expert' :
                rand = Math.floor(Math.random() * 3) + 6;
                break;
            default:
                return;
        }
        const candy = candies.find(candy => candy.id === rand)
        const newArr = [
            ...this.state.userCandies,
            candy
        ]
        localStorage.setItem('userCandies', JSON.stringify(newArr))
        this.setState({userCandies: newArr})
        clearInterval(this.countDown);
        this.setState({victory: true})
        this.setState({game: false})
        this.audioController.victoryPlay()
        this.audioController.stopBackground();   
    }

    gameOver = () => {
        ReactGA.event({
            category: 'Result',
            action: 'Game Over',
            label: this.state.level
        });
        clearInterval(this.countDown);
        this.setState({gameOver: true})
        this.setState({game: false})
        this.audioController.gameOverLaugh();
        this.audioController.stopBackground();
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
        console.log(this.state.matchedCards)
        console.log(this.audioController)
        this.audioController.flip()
        if (this.canFlipCard(card)) {
            if (this.state.cardToCheck.length > 0 && this.state.cardToCheck.length < 2) {
                this.setState({disabled: true})
                this.setCardToCheck(card)
                this.checkForCardMatch(card)
                console.log(this.state.cardToCheck.length)
            } else {
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

        return(
            <div className="game">
                <div className="container">      
                    <Curtain curtain={this.state.curtain} menu={this.state.menu} game={this.state.game}/>
                    <div className="shadow-block">
                    </div>
                    <img src={shadow} alt="shadow" className={`shadow ${this.state.victory || this.state.gameOver ? 'shadow_disabled' : ''}`}/>
                    <BottomLine level={this.state.level} tryAgain={this.tryAgain} goToMenu={this.goToMenu} game={this.state.game} timeRemaining={this.state.timeRemaining}/>
                    <MainMenuPopup setNewUserCandies={this.setNewUserCandies} userCandies={this.state.userCandies} chooseDifficulty={this.chooseDifficulty} menu={this.state.menu}/>
                    <GameOverPopup goToMenu={this.goToMenu} gameOver={this.state.gameOver} tryAgain={this.tryAgain}/>
                    <VictoryPopup userCandies={this.state.userCandies} goToMenu={this.goToMenu} victory={this.state.victory} tryAgain={this.tryAgain}/>
                    <Devil menu={this.state.menu} victory={this.state.victory} gameOver={this.state.gameOver} game={this.state.game}/>  
                    <Board cardToCheck={this.state.cardToCheck} 
                        flipCard={this.flipCard} 
                        cards={this.state.cards}
                        matchedCards={this.state.matchedCards}
                        disabled={this.state.disabled}
                        timeRemaining={this.state.timeRemaining}
                        level={this.state.level}
                        game={this.state.game}
                        />
                    {this.state.menu ? <Footer/> : null }
                </div>
            </div>
        )
    }
}

export default Game;