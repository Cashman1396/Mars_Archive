import React from 'react';
import styled from 'styled-components';
//REDUX 
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction'
import { Link } from 'react-router-dom'




const Game = ({name, released, image, id}) => {
    const stringPathId = id.toString();
    //Detail Handler using dispatch
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadDetail(id));
    }
        return (
        <div>
            
        </div>
    )
}

export default Game
