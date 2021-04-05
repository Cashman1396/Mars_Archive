import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'
//REDUX 
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction.js'
import { Link } from 'react-router-dom'
import { smallImage } from '../utils'
import { popup } from '../components/Animate'


const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 30px rgba(0,0,0,0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;




const Game = ({name, released, image, id}) => {
    const stringPathId = id.toString();
    //Detail Handler using dispatch
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadDetail(id));
    }
        return (
            <StyledGame variants={popup} initial="hidden" animate="show" layoutId={stringPathId} onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
            <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
            <p>Release Date: {released}</p>
            <motion.img 
            layoutId={`image ${stringPathId}`} 
            src={smallImage(image, 640)} 
            alt={name}/>
            </Link>
        </StyledGame>
        )
}

export default Game
