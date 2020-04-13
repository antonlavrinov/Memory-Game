import React from 'react';
import audio1 from './audio/sfx_player_plane_ex_chomp_01.mp3';
import audio2 from './audio/sfx_player_plane_ex_chomp_02.mp3';
import audio3 from './audio/sfx_player_plane_ex_chomp_03.mp3';
import audio4 from './audio/sfx_player_plane_ex_chomp_04.mp3';
import audio5 from './audio/sfx_player_plane_ex_chomp_05.mp3';
import hehe1 from './audio/devil_voice1.mp3';
import hehe2 from './audio/devil_voice2.mp3';
import hehe3 from './audio/devil_voice3.mp3';
import ding1 from './audio/sfx_player_parry_power_increment_p1.mp3';
import ding2 from './audio/sfx_player_parry_power_increment_p2.mp3';
import victory from './audio/VICTORY.mp3';
import gameOverLaugh1 from './audio/sfx_flower_laughs_01.mp3';
import gameOverLaugh2 from './audio/sfx_flower_laughs_02.mp3';
import gameOverLaugh3 from './audio/sfx_flower_laughs_03.mp3';
import gameOverLaugh4 from './audio/sfx_flower_laughs_04.mp3';
import gameOverLaugh5 from './audio/sfx_flower_laughs_05.mp3';
import backgroundMusic from './audio/MUS_Mausoleum.mp3';

class AudioController extends React.Component {
    constructor() {
        super();
        this.flipSound1 = new Audio(audio1);
        this.flipSound2 = new Audio(audio2);
        this.flipSound3 = new Audio(audio3);
        this.flipSound4 = new Audio(audio4);
        this.flipSound5 = new Audio(audio5);
        this.heheStart1 = new Audio(hehe1);
        this.heheStart2 = new Audio(hehe2);
        this.heheStart3 = new Audio(hehe3);
        this.dingSound1 = new Audio(ding1);
        this.dingSound2 = new Audio(ding2);
        this.victory = new Audio(victory);
        this.laugh1 = new Audio(gameOverLaugh1);
        this.laugh2 = new Audio(gameOverLaugh2);
        this.laugh3 = new Audio(gameOverLaugh3);
        this.laugh4 = new Audio(gameOverLaugh4);
        this.laugh5 = new Audio(gameOverLaugh5);
        this.backgroundMusic = new Audio(backgroundMusic)
    }

    volumeOff() {
        this.backgroundMusic.volume = 0;
        this.laugh1.volume = 0;
        this.laugh2.volume = 0;
        this.laugh3.volume = 0;
        this.laugh4.volume = 0;
        this.laugh5.volume = 0;
        this.victory.volume = 0;
        this.dingSound1.volume = 0;
        this.dingSound2.volume = 0;
        this.heheStart1.volume = 0;
        this.heheStart2.volume = 0;
        this.heheStart3.volume = 0;
        this.flipSound1.volume = 0;
        this.flipSound2.volume = 0;
        this.flipSound3.volume = 0;
        this.flipSound4.volume = 0;
        this.flipSound5.volume = 0;

    }

    stopBackground() {
        this.backgroundMusic.currentTime = 0;
        this.backgroundMusic.pause()

    }

    playBackground() {
        this.backgroundMusic.volume = 0.4;
        this.backgroundMusic.play()
    }

    pause() {
            // console.log('MUUUSIC', this.laugh1.paused, this.laugh2.paused, this.laugh3.paused, this.laugh4.paused, this.laugh5.paused)
        // this.laugh1.pause()
        // this.laugh2.pause()
        // this.laugh3.pause()
        // this.laugh4.pause()
        // this.laugh5.pause()
        // this.backgroundMusic.play()


    }


    gameOverLaugh() {
        const rand = Math.floor(Math.random() * 5) + 1;
        switch (rand) {
            case 1:
                this.laugh1.play();
                break;
            case 2:
                this.laugh2.play();
                break;
            case 3:
                this.laugh3.play();
                break;
            case 4:
                this.laugh4.play();
                break;
            case 5:
                this.laugh5.play();
                break;
            default:
                this.laugh1.play();
        }
    }

    victoryPlay() {
        this.victory.play();
    }
    cons() {
        console.log('Hi!')
    }

    cardMatch() {
        const rand = Math.floor(Math.random() * 2) + 1;
        switch (rand) {
            case 1:
                this.dingSound1.play();
                break;
            case 2:
                this.dingSound2.play();
                break;
            default:
                this.dingSound1.play();
        }

    }

    devilVoice() {
        const rand = Math.floor(Math.random() * 3) + 1;
        switch (rand) {
            case 1:
                this.heheStart1.play()
                break;
            case 2:
                this.heheStart2.play()
                break;
            case 3:
                this.heheStart3.play()
                break;
            default:
                this.heheStart1.play()
        }

    }

    flip() {
        const rand = Math.floor(Math.random() * 6) + 1;
        // console.log('RANDOOOOOOOM', rand)
        switch (rand) {
            case 1:
                this.flipSound1.play();
                break;
            case 2:
                this.flipSound2.play();
                break;
            case 3:
                this.flipSound3.play();
                break;
            case 4:
                this.flipSound4.play();
                break;
            case 5:
                this.flipSound5.play();
                break;
            default: 
                this.flipSound1.play();

        }
    }

    cancelFlip() {
        this.flipSound.pause()
    }
        
    
}

export default AudioController;