import React, { useState } from 'react'
//Routes
import { useDispatch } from 'react-redux'
import { fetchSearch } from '../actions/gameAction';
import {fadeIn} from '../components/Animate'
//Styling
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../assets/flame-logo.svg';


const StyledNav = styled(motion.div)`
    padding: 3rem 5rem;
    text-align: center;
    input {
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
        font-weight: bold;
    }
    button {
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #ee99ee;
        color: black;
    }
`;

const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
    img {
        height: 2rem;
        width: 2rem;
    }
`;


const Navbar = () => {
     const dispatch = useDispatch()
     const [textInput, setTextInput] = useState('');
     const inputHandler = (e) => {
         e.preventDefault();
        setTextInput(e.target.value)    
     };

     const submitSearch = (e) => {
         e.preventDefault();
         dispatch(fetchSearch(textInput));
         setTextInput("");
     };

     const clearSearched = () => {
         dispatch({type: "CLEAR_SEARCH"});
     };

     return (
        <StyledNav variants={fadeIn} initial="hidden" animate="show">
            <Logo onClick={clearSearched}>
                <img src={logo} alt="logo"/>
                <h1>Mars Archive</h1>
            </Logo>
            
            <form className="search">
                <input value={textInput} onChange={inputHandler} type="text"/>
                <button onClick={submitSearch} type="submit">
                    Search
                </button>
            </form>
        </StyledNav>

     )


}

export default Navbar;