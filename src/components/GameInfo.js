import React from 'react';
// Redux stuff
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import {smallImage} from '../utils';

//Assets
import gamepad from '../img/gamepad.svg';
import playstation from '../img/sony.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/switch.svg';

//Rating
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png'


const GameInfo = ({pathId}) => {
    const history = useHistory();

    //Exit Detail Handler
    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto';
            history.push('/');
        }
    };
}