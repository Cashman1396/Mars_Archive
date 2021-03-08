import React, { useState } from 'react'
//Routes
import { useDispatch } from 'react-redux'


const Navbar = () => {
     const dispatch = useDispatch()
     const [textInput, setTextInput] = useState('');
     const inputHandler = (e) => {
         e.preventDefault();
        setTextInput(e.target.value)    
     };

     const submitSearch = (e) => {
         e.preventDefault();
         dispatch(fetchSearch(textInput))
     }


}