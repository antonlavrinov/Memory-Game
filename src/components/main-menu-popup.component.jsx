import React from 'react';
import {CSSTransition} from 'react-transition-group';
import memoryGame from '../images/memory-game-min.png';
import devilMenu from '../images/devil_menu-min.png';
import devilOpenMouth from '../images/devil_menu-open-mouth-min.png';
import devilSatisfied from '../images/devil_menu-satisfied-min.png';
import devilAngry from '../images/devil_menu-angry-min.png';
import CandyBagIcon from './candy-bag-icon.component';
import CandyBag from './candy-bag.component';
import Languages from './languages.component';
import {DropTarget} from 'react-drag-drop-container';
import parse from 'html-react-parser';
import AudioController from '../music';
import {withTranslation} from 'react-i18next';


import ReactGA from 'react-ga';
import DialogueMenu from './dialogue-menu.component';




class MainMenuPopup extends React.Component {
    state = {
        candyBagModal: false,
        dialogueMessage: "",
        dragEntered: false,
        currentDialogue: 'start',
        eatenCandy: [],

    }

 
    //Sounds
    audioController = new AudioController();


    slideDoorSound = () => {
        this.audioController.doorSlide()
    }

    pickCandy = () => {
        this.audioController.pickCandySound()
    }





    //Change Language
    changeLanguage = (lang) => {
        this.props.i18n.changeLanguage(lang);
        
        console.log("CHANGE LANGUAGE", this.state.eatenCandy)

    }



    //Setting Dialogues
    componentDidMount() {
        this.setDialogue()
    }

    setDialogue = () => {
        setTimeout(() => {
            this.setState({currentDialogue: "start"})
        }, 200)
    }






    //Candy bag
    toggleCandyBagHidden = () => {
        this.setState({candyBagModal: !this.state.candyBagModal})
    }


    closeCandyBag = () => {
        if(this.state.candyBagModal) {
            this.setState({candyBagModal: false})
        }
    }

    //DragDropEvents

    onDragLeave = e => {
        if(this.state.dragEntered) {
            this.audioController.devilAngrySound()
            this.setState({dragEntered: false})
            // this.setDialogueAngry()
            this.setState({currentDialogue: "angry"})

            ReactGA.event({
                category: 'Devil',
                action: 'Angry'
            });
        }
    }

    onDragEnter = e => {
        this.audioController.openMouthSound()
        this.setState({currentDialogue: "openMouth"})
        this.setState({dragEntered: true})
        
    }

    onHit = e => {

        
        this.audioController.eatCandySound()
        console.log(e.dragData.id)
        const {userCandies} = this.props;
        const idx = userCandies.findIndex((el) => el.id === e.dragData.id)
        const newUserCandies = [...userCandies.slice(0, idx), ...userCandies.slice(idx +1)]
        this.props.setNewUserCandies(newUserCandies)
        this.setState({eatenCandy: e.dragData});

        this.setState({currentDialogue: "satisfied"})
        this.setState({dragEntered: false})

        ReactGA.event({
            category: 'Devil',
            action: 'Candy eaten',
            label: this.state.eatenCandy.name
        });
  
    }




    render() {
        const { t } = this.props;
        const {menu, chooseDifficulty, userCandies} = this.props;
        const simpleLevelWin = localStorage.getItem('simple') ? 'button_complete' : '';
        const regularLevelWin = localStorage.getItem('regular') ? 'button_complete' : '';
        const expertLevelWin = localStorage.getItem('expert') ? 'button_complete' : '';
        const textVisibility = this.state.candyBagModal ? 'modal__tutorial-text_disabled' : '';
        const tutorialVisibility = this.state.candyBagModal ? 'modal__tutorial_disabled' : '';
        const devilImage = this.state.currentDialogue === 'start' ? devilMenu : this.state.currentDialogue === 'angry' ? devilAngry : this.state.currentDialogue === 'satisfied' ? devilSatisfied : this.state.currentDialogue === 'openMouth' ? devilOpenMouth : null;
        return(
            <CSSTransition classNames="popup__modal" unmountOnExit in={menu} timeout={300}>
                    <div translate="no" className="main-menu notranslate">
                        <Languages changeLanguage={this.changeLanguage}/>
                        <img src={memoryGame} alt="memory-game" className="main-menu__logo"/>
                        <div className="main-menu__overlay">
                            <div></div>
                        </div>
                        <div className="modal"> 
                            <DialogueMenu eatenCandy={this.state.eatenCandy} currentDialogue={this.state.currentDialogue}/>
                            <DropTarget targetKey="foo"
                                        dropData="dd"
                                        onDragEnter={this.onDragEnter}
                                        onHit={this.onHit} 
                                        onDragLeave={this.onDragLeave}>
                                <img className={`devil__image devil__image_menu`} src={devilImage} alt="devil"/>    
                            </DropTarget>
                            
                            <div className="modal__main-block">
                                <div className="modal__candy-block">
                                    <CandyBagIcon slideDoorSound={this.slideDoorSound} userCandies={userCandies} toggleCandyBagHidden={this.toggleCandyBagHidden}/>
                                </div>
                                <div className="modal__text-block">
                                    <div className={`modal__tutorial ${tutorialVisibility}`}>
                                        <div translate="no" className={`modal__tutorial-text ${textVisibility}`}>
                                                {parse(t('tutorialMessage'))}
                                        </div>
                                    </div>

                                    <CandyBag pickCandy={this.pickCandy} userCandies={userCandies} candyBagModal={this.state.candyBagModal}/>              
                                </div>
                            </div>  

                            <div className="modal__buttons-block">
                                <button className={`button button_menu button_brown ${simpleLevelWin}`} onClick={() => {chooseDifficulty('simple'); this.closeCandyBag(); this.setDialogue()}}>
                                    {t('levels.simple')}
                                </button>
                                <button className={`button button_menu button_purple ${regularLevelWin}`} onClick={() => {chooseDifficulty('regular'); this.closeCandyBag(); this.setDialogue()}}>
                                    {t('levels.regular')}
                                </button>
                                <button className={`button button_menu button_orange ${expertLevelWin}`} onClick={() => {chooseDifficulty('expert'); this.closeCandyBag(); this.setDialogue()}}>
                                    {t('levels.expert')}
                                </button>
                            </div>
                        </div>
                    </div>
            </CSSTransition>
        )
    }
}

export default withTranslation()(MainMenuPopup);