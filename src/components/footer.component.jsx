import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import cuphead from '../images/cuphead-min.png';


const Footer = () => {

    return (
        <footer translate="no" className="footer notranslate">
            <div className="footer__block">
                <div className="creator ">
                    <a className="creator__link" target="_blank" rel="noopener noreferrer" href='https://github.com/antonlavrinov/Memory-Game'>
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                        <div className="creator__name">
                            <span className="creator__small-font">Created by</span> <br />Anton Lavrinov
                        </div>
                    </a>
                </div>
                <div className="react-icon">
                    <a className="react-icon__link" target="_blank" rel="noopener noreferrer" href='https://reactjs.org/' >
                        <FontAwesomeIcon icon={faReact} size="2x" />React
                    </a>
                </div>
                <div className="cuphead">
                    <a className="cuphead__link" target="_blank" rel="noopener noreferrer" href='http://cupheadgame.com/'>
                        <div className="cuphead__descr notranslate">Sounds by</div>
                        <img className="cuphead__logo" src={cuphead} alt="cuphead" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;