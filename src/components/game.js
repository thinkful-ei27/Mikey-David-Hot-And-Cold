import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
//change feedback to pass hot or cold (from state)
//change count from state and pass to GuessCount
//grab guesses from state and pass to GuessList
export default class Game extends React.Component {
   constructor(props){
    super(props)

    this.state={
        guessArray:[],
        isHot: null,
        correctAnswer: null,
        whatPage: false
    }

   }
   handleAddGuess(guess){
       this.toggleHotCold(guess);
       this.setState({
        guessArray:[...this.state.guessArray, guess]
       })
   }

   createCorrectAnswer(){
    const newGameAnswer = Math.floor(Math.Random()*100)+1
       this.setState({correctAnswer: newGameAnswer})
   }

   toggleHotCold(guess){
      const correctAnswer = this.state.correctAnswer;
      if(guess < correctAnswer + 10 && guess > correctAnswer -10){
          this.setState({
              isHot: true
          })
      } else { this.setState({
          isHot: false
        })
      }
   }

   toggleWhatPage(){
        let notWhatPage = !(this.state.whatPage)
         this.setState({whatPage: notWhatPage}) 
       
   }
   
   
    render(){
    return (
        <div>
            <Header />
            <GuessSection feedback="Make your guess!" /> 
            <GuessCount count={3} />
            <GuessList guesses={[10, 15, 25]} />
        </div>
    );
   }
}

