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
import devilCry1 from './audio/sfx_devil_imp_death_01.mp3';
import devilCry2 from './audio/sfx_devil_imp_death_02.mp3';
import devilCry3 from './audio/sfx_devil_imp_death_03.mp3';
import devilCry4 from './audio/sfx_devil_imp_death_04.mp3';
import winSound from './audio/win_award_ping_01.mp3';
import death1 from './audio/sfx_player_death_01.mp3';
import death2 from './audio/sfx_player_death_02.mp3';
import winSound2 from './audio/MUS_LegendaryGhost-min.mp3';
import slideUp from './audio/doorSlide.mp3';
import pickCandy from './audio/Menu_Move.mp3';
import openMouth1 from './audio/sfx_level_dragon_fire_marcher_B_crouch_start_01.mp3';
import openMouth2 from './audio/sfx_level_dragon_fire_marcher_B_crouch_start_02.mp3';
import glugSound from './audio/sfx_level_mouse_can_catapult_glug_02.mp3';
import happyDevilSound from './audio/sfx_dice_palace_domino_intro_start_loop_01.mp3';
import devilAngryVoice1 from './audio/sfx_platforming_flowergrunt_02.mp3';
import devilAngryVoice2 from './audio/sfx_platforming_flowergrunt_03.mp3';
import devilAngryVoice3 from './audio/sfx_platforming_flowergrunt_04.mp3';
import devilAngryVoice4 from './audio/sfx_platforming_flowergrunt_05.mp3';



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
        this.cry1 = new Audio(devilCry1);
        this.cry2 = new Audio(devilCry2);
        this.cry3 = new Audio(devilCry3);
        this.cry4 = new Audio(devilCry4);
        this.winSound = new Audio(winSound);
        this.winSound2 = new Audio(winSound2);
        this.deathGameOver1 = new Audio(death1);
        this.deathGameOver2 = new Audio(death2);
        this.slideUp = new Audio(slideUp);
        this.pickCandy = new Audio(pickCandy)
        this.openMouth1 = new Audio(openMouth1);
        this.openMouth2 = new Audio(openMouth2);
        this.glugSound = new Audio(glugSound);
        this.happyDevilSound = new Audio(happyDevilSound);
        this.devilAngryVoice1 = new Audio(devilAngryVoice1);
        this.devilAngryVoice2 = new Audio(devilAngryVoice2);
        this.devilAngryVoice3 = new Audio(devilAngryVoice3);
        this.devilAngryVoice4 = new Audio(devilAngryVoice4);
    }

    devilAngrySound() {
        const rand = Math.floor(Math.random() * 4) + 1;
        this.devilAngryVoice1.volume = 0.8;
        this.devilAngryVoice2.volume = 0.8;
        this.devilAngryVoice3.volume = 0.8;
        this.devilAngryVoice4.volume = 0.8;
        switch(rand) {
            case 1:
                this.devilAngryVoice1.play()
                break;
            case 2:
                this.devilAngryVoice2.play()
                break;
            case 3:
                this.devilAngryVoice3.play()
                break;
            case 4:
                this.devilAngryVoice4.play()
                break;
            default:
                this.devilAngryVoice2.play()
        }
        
    }

    stopSound = (sound) => {
        sound.pause()
        sound.currentTime = 0
    }

    openMouthSound() {
        this.stopSound(this.devilAngryVoice4)
        this.stopSound(this.devilAngryVoice3)
        this.stopSound(this.devilAngryVoice2)
        this.stopSound(this.devilAngryVoice1)
        this.openMouth1.volume = 0.3
        this.openMouth2.volume = 0.3
        
        const rand = Math.floor(Math.random() * 2) + 1;

        switch (rand) {
            case 1:
                this.openMouth1.play()
                break;
            case 2:
                this.openMouth2.play()
                break;
            default:
                this.openMouth1.play()
        }
    }

    eatCandySound() {
        this.glugSound.volume = 0.3
        this.happyDevilSound.volume = 0.3
        this.happyDevilSound.play()
        this.flipSound4.play()
        this.glugSound.play()
    }
    pickCandySound() {
        this.pickCandy.play()
    }
    doorSlide() {
        this.slideUp.currentTime = 0;
        this.slideUp.volume = 0.2
        this.slideUp.play()
    }

    stopBackground() {
        this.backgroundMusic.currentTime = 0;
        this.backgroundMusic.pause()

    }

    playBackground() {
        this.backgroundMusic.volume = 0.4;
        this.backgroundMusic.play()
    }

    gameOverLaugh() {
        this.deathGameOver1.volume = 0.3;
        this.deathGameOver2.volume = 0.3;
        const rand = Math.floor(Math.random() * 5) + 1;
        switch (rand) {
            case 1:
                setTimeout(() => {
                    this.laugh1.play();
                }, 400)
                this.deathGameOver1.play()
                break;
            case 2:
                setTimeout(() => {
                    this.laugh2.play();
                }, 400)
                this.deathGameOver2.play()
                break;
            case 3:
                setTimeout(() => {
                    this.laugh3.play();
                }, 400)
                this.deathGameOver1.play()
                break;
            case 4:
                setTimeout(() => {
                    this.laugh4.play();
                }, 400)
                this.deathGameOver2.play()
                break;
            case 5:
                this.deathGameOver1.play()
                setTimeout(() => {
                    this.laugh5.play();
                }, 400)
                break;
            default:
                this.deathGameOver1.play()
                setTimeout(() => {
                    this.laugh1.play();
                }, 400)
        }
    }

    victoryPlay() {
        const rand = Math.floor(Math.random() * 4) + 1;
        this.winSound.volume = 0.3;
        this.winSound.play()
        this.winSound2.volume = 0.3;
        this.cry1.volume = 0.7;
        this.cry2.volume = 0.7;
        this.cry3.volume = 0.7;
        this.cry4.volume = 0.7;
        switch(rand) {
            case 1:
                this.cry1.play();
                break;
            case 2:
                this.cry2.play();
                break;
            case 3:
                this.cry3.play();
                break;
            case 4:
                this.cry4.play();
                break;
            default:
                this.cry1.play();
        }
        setTimeout(() => {
            this.winSound2.play();
            this.victory.play();
        }, 300)
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


        
    
}

export default AudioController;