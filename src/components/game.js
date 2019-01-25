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
    isHot: "",
    correctAnswer: -999999,
    whatPage: false,
    
  }
  }
  setCorrectAnswer() {
      const newGameAnswer = Math.floor(Math.random()*100)+1
      this.setState({correctAnswer: newGameAnswer})
   
  }
  handleAddGuess(guess){
    if (this.state.guessArray.length === 0) {
      this.setCorrectAnswer();
    }
    this.toggleHotCold(guess);
    this.setState({
      guessArray:[...this.state.guessArray, guess]
    })
  }

  toggleHotCold(guess) {
    const correctAnswer = this.state.correctAnswer;
    if (guess === correctAnswer) {
      this.setState({isHot: "YOU WIN! Click new game to play again"})
    }
    else if(guess < (correctAnswer + 10) && guess > (correctAnswer -10)){
      this.setState({
        isHot: "Hot"
      })
    } else { 
        this.setState({
        isHot: "Cold"
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
        <Header toggleWhatPage={() => this.toggleWhatPage()}/>
        <GuessSection isHot={ (guess) => this.toggleHotCold(guess)} 
        addGuess={ (guess) => this.handleAddGuess(guess)}
        hotColdValue={this.state.isHot}/> 
        <GuessCount count={this.state.guessArray.length} />
        <GuessList guesses={this.state.guessArray} />
      </div>
    );
   }
}

