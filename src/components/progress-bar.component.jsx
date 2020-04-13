import React from 'react';

const ProgressBar = ({timeRemaining, level}) => {
    const progressBarStyle = level === 'simple' ? 25 : level === 'regular' ? 30 : level === 'expert' ? 90 : 0;  
    return (
        <div className='progress-bar'>
            <div className="progress-bar__ends progress-bar__ends_top"></div>
            <span style={{
                animation: `progress-bar ${progressBarStyle + 0.5}s linear`
            }}></span>
            <div className="progress-bar__ends progress-bar__ends_bottom"></div>
            <div className="timer">{timeRemaining}</div>
        </div>
    )
}

export default ProgressBar;