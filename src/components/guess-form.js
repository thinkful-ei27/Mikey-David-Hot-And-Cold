import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
   let number;
    let clearform = ()=>
    {document.getElementById("userGuess").reset()}
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            props.handleSubmit(number)
            clearform();
            
        }}id="userGuess">
            <input type="text" name="userGuess" 
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required onChange={(e) => {
                number = e.target.value}}/>
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};

