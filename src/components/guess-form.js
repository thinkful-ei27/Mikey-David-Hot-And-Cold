import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    let number;
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            props
        }}>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required onChange={(e) => {
                props.guessNumber = e.target.value}}/>
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};

