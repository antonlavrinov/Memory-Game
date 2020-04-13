import React from 'react';

const Menu = ({setGame}) => {
    return (
        <div className="menu">
            <button onClick={() => setGame(true)}>Start</button>
        </div>
    )
}

export default Menu;