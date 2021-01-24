import React from 'react';
import { withTranslation } from 'react-i18next';
import dialogTail from '../images/dialog_tail-min.png';
import parse from 'html-react-parser';


const DialogueMenu = ({ eatenCandy, currentDialogue, t }) => {

    const satisfiedSpeech = `${t('dialogues.dialogueSatisfied.thankYou')}
                       ${t('dialogues.dialogueSatisfied.this')} <span class='dialog_${eatenCandy.color}'>${t(eatenCandy.name)}</span> 
                       ${t('dialogues.dialogueSatisfied.tastes')} <span class='dialog_${eatenCandy.color}'>${t(eatenCandy.taste)}</span>. 
                       ${t('dialogues.dialogueSatisfied.ending')}`;

    let dialogue;

    switch (currentDialogue) {
        case 'start':
            dialogue = t('dialogues.dialogueStart')
            break;
        case 'openMouth':
            dialogue = '........😛😵🤪'
            break;
        case 'angry':
            dialogue = t('dialogues.dialogueAngry')
            break;
        case 'satisfied':
            dialogue = satisfiedSpeech
            break;
        default:
            dialogue = ''
    }


    return (
        <div className="dialog dialog_menu">
            {parse(dialogue)}
            <img src={dialogTail} alt="dialogTail" className="dialog__tail" />
        </div>
    )
}

export default withTranslation()(DialogueMenu);