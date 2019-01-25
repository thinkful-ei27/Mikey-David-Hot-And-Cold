import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
    return (
        <section>
            <h2 id="feedback">{props.hotColdValue}</h2>
            <GuessForm guessNumber={0} handleSubmit={ (guess) => {props.addGuess(guess)
            //Call function that adds number topassed down from Game
            }}/>
        </section>
    );
}

