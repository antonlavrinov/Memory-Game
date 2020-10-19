import React from 'react';
import {withTranslation} from 'react-i18next';
import dialogTail from '../images/dialog_tail-min.png';
import parse from 'html-react-parser';

const DialogueMenu = ({eatenCandy, currentDialogue, t}) => {
    const satisfied = `${t('dialogues.dialogueSatisfied.thankYou')}
    ${t('dialogues.dialogueSatisfied.this')} <span class='dialog_${eatenCandy.color}'>${t(eatenCandy.name)}</span> 
    ${t('dialogues.dialogueSatisfied.tastes')} <span class='dialog_${eatenCandy.color}'>${t(eatenCandy.taste)}</span>. 
    ${t('dialogues.dialogueSatisfied.ending')}`;
    const dialogue = currentDialogue === 'start' ? `${t('dialogues.dialogueStart')}` : currentDialogue === 'openMouth' ? '........😛😵🤪' : currentDialogue === 'angry' ? `${t('dialogues.dialogueAngry')}` : currentDialogue === 'satisfied' ? satisfied : '';
    
    return (
        <div className="dialog dialog_menu">
            {parse(dialogue)}
            <img src={dialogTail} alt="dialogTail" className="dialog__tail"/>
        </div>
    )
}

export default withTranslation()(DialogueMenu);