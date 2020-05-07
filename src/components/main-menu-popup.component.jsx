import React from 'react';
import {CSSTransition} from 'react-transition-group';
import memoryGame from '../images/memory-game-min.png';
import devilMenu from '../images/devil_menu-min.png';
import devilOpenMouth from '../images/devil_menu-open-mouth-min.png';
import devilSatisfied from '../images/devil_menu-satisfied-min.png';
import devilAngry from '../images/devil_menu-angry-min.png';
import dialogTail from '../images/dialog_tail-min.png';
import CandyBagIcon from './candy-bag-icon.component';
import CandyBag from './candy-bag.component';
import Languages from './languages.component';
import {DropTarget} from 'react-drag-drop-container';
import parse from 'html-react-parser';
import AudioController from '../music';
import {withTranslation} from 'react-i18next';
import i18next from 'i18next';
import {candies} from '../candies';
import ReactGA from 'react-ga';


class MainMenuPopup extends React.Component {
    state = {
        candyBagModal: false,
        dialogueMessage: "",
        dragEntered: false,
        currentDialogue: 'start',
        eatenCandy: [] 
    }

    //Sounds
    audioController = new AudioController();


    slideDoorSound = () => {
        this.audioController.doorSlide()
    }

    pickCandy = () => {
        this.audioController.pickCandySound()
    }



    















    


    //Synchronizing dialogues translation
    synchronizeCandyTranslation = () => {
        const candyToTranslateId = this.state.eatenCandy.id;
        const translatedCandy = candies.filter((candy) => candy.id === candyToTranslateId)
        this.setState(({eatenCandy}) => {
            const newObj = {
                ...eatenCandy,
                name: translatedCandy[0].name,
                taste: translatedCandy[0].taste
            }
            return {eatenCandy: newObj}
        });
    }   

    synchronizeTranslation = () => {
        switch(this.state.currentDialogue) {
            case 'angry':
                this.setDialogueAngry()
                break;
            case 'start':
                this.setDialogueStart()
                break;
            case 'satisfied':
                this.setDialogueSatisfied()
                break;
            default:
                return;
        }
    }

    //Change Language
    changeLanguage = async (lang) => {
        this.props.i18n.changeLanguage(lang);
        
        console.log("CHANGE LANGUAGE", this.state.eatenCandy)
        if(Object.keys(this.state.eatenCandy).length > 0) {
            await this.synchronizeCandyTranslation()
        }
        await this.synchronizeTranslation();

    }



    //Setting Dialogues
    componentDidMount() {
        i18next
            .loadNamespaces("translation")
            .then(() => {
                this.setDialogue()
            });
    }

    setDialogue = () => {
        setTimeout(() => {
            this.setDialogueStart()
            this.setState({currentDialogue: "start"})
        }, 200)
    }

    setDialogueStart = () => {
        this.setState({dialogueMessage: `<span>${this.props.t('dialogues.dialogueStart')}</span>`})
    }
    setDialogueAngry = () => {
        const dialog = this.props.t('dialogues.dialogueAngry');
        this.setState({dialogueMessage: dialog})
    }
    setDialogueSatisfied = () => {
        console.log("DIALOGUE SATISFIED", this.state.eatenCandy.name)
        const {t} = this.props;
        this.setState({dialogueMessage: `${t('dialogues.dialogueSatisfied.thankYou')}
                                        ${t('dialogues.dialogueSatisfied.this')} <span class='dialog_${this.state.eatenCandy.color}'>${this.state.eatenCandy.name}</span> 
                                        ${t('dialogues.dialogueSatisfied.tastes')} <span class='dialog_${this.state.eatenCandy.color}'>${this.state.eatenCandy.taste}</span>. 
                                        ${t('dialogues.dialogueSatisfied.ending')}`})
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
            e.target.src = devilAngry
            this.setState({dragEntered: false})
            this.setDialogueAngry()
            this.setState({currentDialogue: "angry"})

            ReactGA.event({
                category: 'Devil',
                action: 'Angry'
            });
        }
    }

    onDragEnter = e => {
        this.audioController.openMouthSound()
        e.target.src = devilOpenMouth
        const dialog = "........😛😵🤪";
        this.setState({dialogueMessage: dialog})
        this.setState({dragEntered: true})
        
    }

    onHit = e => {

        
        this.audioController.eatCandySound()
        console.log(e.dragData.id)
        e.target.src = devilSatisfied
        const {userCandies} = this.props;
        const idx = userCandies.findIndex((el) => el.id === e.dragData.id)
        const newUserCandies = [...userCandies.slice(0, idx), ...userCandies.slice(idx +1)]
        this.props.setNewUserCandies(newUserCandies)
        this.setState(() => {
            const candyToTranslateId = e.dragData.id;
            const translatedCandy = candies.filter((candy) => candy.id === candyToTranslateId)
            const newObj = {
                color: translatedCandy[0].color,
                name: translatedCandy[0].name,
                taste: translatedCandy[0].taste,
                id: translatedCandy[0].id
            }
            return {
                eatenCandy: newObj
            }
        });

        this.setState({currentDialogue: "satisfied"})
        this.setState({dragEntered: false})
        this.setDialogueSatisfied()

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
        return(
            <CSSTransition classNames="popup__modal" unmountOnExit in={menu} timeout={300}>
                    <div className="main-menu">
                        <Languages changeLanguage={this.changeLanguage}/>
                        <img src={memoryGame} alt="memory-game" className="main-menu__logo"/>
                        <div className="main-menu__overlay">
                            <div></div>
                        </div>
                        <div className="modal"> 
                            <div className="dialog dialog_menu">
                                {parse(this.state.dialogueMessage)}
                                <img src={dialogTail} alt="dialogTail" className="dialog__tail"/>
                            </div>
                            <DropTarget targetKey="foo"
                                        dropData="dd"
                                        onDragEnter={this.onDragEnter}
                                        onHit={this.onHit} 
                                        onDragLeave={this.onDragLeave}>
                                <img className={`devil__image devil__image_menu`} src={devilMenu} alt="devil"/>    
                            </DropTarget>
                            
                            <div className="modal__main-block">
                                <div className="modal__candy-block">
                                    <CandyBagIcon slideDoorSound={this.slideDoorSound} userCandies={userCandies} toggleCandyBagHidden={this.toggleCandyBagHidden}/>
                                </div>
                                <div className="modal__text-block">
                                    <div className={`modal__tutorial ${tutorialVisibility}`}>
                                        <div className={`modal__tutorial-text ${textVisibility}`}>
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