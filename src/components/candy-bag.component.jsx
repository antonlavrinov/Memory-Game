import React from 'react'
import {ReactComponent as NotFound} from '../images/search_not-found.svg';
// import {Droppable, Draggable} from 'react-beautiful-dnd';
import { DragDropContainer} from 'react-drag-drop-container';
import {withTranslation} from 'react-i18next';
import parse from 'html-react-parser';






// Bind the functions...
// document.getElementById('draggable-element').onmousedown = function () {
//     this._drag_init(this);

const CandyBag = ({userCandies, pickCandy, t}) => {

    let selected = null; // Object of the element to be moved
    let x_pos = 0; 
    let y_pos = 0; // Stores x & y coordinates of the mouse pointer
    let x_elem = 0;
    let y_elem = 0; // Stores top, left values (edge) of the element
    
    let elem_height = 0;
    let elem_width = 0;
    
    let half_elem_height;
    let half_elem_width;
    
    // Will be called when user starts dragging an element
    const _drag_init = (elem) => {
        // Store the object of the element which needs to be moved
        selected = elem;
    
        let boundingRectangle = selected.getBoundingClientRect();
        console.log(boundingRectangle)
        console.log(selected.offsetHeight)
    
        y_elem = (selected.offsetHeight - (boundingRectangle.bottom - boundingRectangle.top)) / 2;
        x_elem = (selected.offsetWidth - (boundingRectangle.right - boundingRectangle.left)) / 2
        
        half_elem_height = (boundingRectangle.bottom - boundingRectangle.top) / 2;
        half_elem_width = (boundingRectangle.right - boundingRectangle.left) /2;
        
        document.addEventListener('mousemove', _move_elem, false);
        // document.addEventListener('mouseup', _destroy, false);    
    };
    
    // Will be called when user dragging an element
    const _move_elem = (e) => {
        x_pos = e.clientX;
        y_pos = e.clientY;
    
        selected.style.left = ((x_pos - x_elem) - half_elem_width) + 'px';
        selected.style.top = ((y_pos - y_elem) - half_elem_height) + 'px';  
    } 
    
    // Destroy the object when we are done and remove event binds
    const _destroy = () => {
        selected = null;
        document.removeEventListener('mousemove', _move_elem);
        document.removeEventListener('mouseup', _destroy);
    }

    const dragStart = () => {
        const elem = document.querySelector('.ddcontainerghost');
        console.log(elem)
        elem.style.transfrom = 'scale(1.5)'
        // _drag_init(elem)
    }


    return (
        <div className="candy-bag">
            <div className="candy-bag-modal__collection">
                {!userCandies.length ? ( <div className="candy-bag__not-found">
                        <NotFound className="candy-bag__search-icon"/>
                        <div className="candy-bag__not-found-title">
                            {t('emptyCandyBag.title')}
                        </div>
                        <div className="candy-bag__not-found-descr">
                            {parse(t('emptyCandyBag.tutorial'))}
                        </div>
                    </div> ) : (null)}
                <div className="candy-bag-modal__candies-grid">
                    {userCandies.map((candy, index) => {
                        return (
                            <div onClick={() => pickCandy()}  key={index} className="candy-bag-modal__candy-slot">
                                <DragDropContainer  targetKey="foo"
                                                   dragData={candy}
                                                   onDragStart={
                                                       () => dragStart()
                                                    }
                                                   >
                                    <img src={candy.url} alt="candy" className="candy-bag-modal__candy-img"/>
                                </DragDropContainer>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )

}

export default withTranslation()(CandyBag);