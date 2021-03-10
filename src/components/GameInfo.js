import React from 'react';
// Redux stuff
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import {smallImage} from '../utils';

//Assets
import controller from '../img/controller.svg';
import playstation from '../img/sony.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/switch.svg';

//Rating
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png'


const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track {
        background: white;
    }
`;

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    z-index: 10;
    color: black;
    img {
        width: 100%;
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        width: 2rem;
        height: 2rem;
        display: inline;
    }
`;

const Info = styled(motion.div)`
    text-align: center;  
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem;
    }
`;

const Media = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`;



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


    const getRating= () => {
        const stars = [];
        const rating = Math.floor(game.rating);
        for(let i = 1; i <= 5; i++){
            if (i <= rating) {
                stars.push(<img alt="star" key={i} src={starFull}></img>);
            } else {
                stars.push(<img alt="star" key={i} src={starEmpty}></img>);
            }
        }
        return stars;
    };


    const getPlatform = (platform) => {
        switch(platform){
            case "PlayStation 4":
                return playstation;
            case "Xbox One":
                return xbox;
            case "PC":
                return steam;
            case "Nintendo Switch":
                return nintendo;
            case "iOS":
                return apple;
            default:
                return controller;
         }
    }

    const getStores = (store) => {
        switch(store) {
            case "PlayStation Store":
                return playstation;
            case "Steam":
                return steam;
            case "Epic Games":
                return epic;
            case "Xbox Store":
                return xbox;
            default:
                return gamepad;
        }
    }
}