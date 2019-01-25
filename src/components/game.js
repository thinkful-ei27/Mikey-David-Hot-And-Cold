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
    isHot: "Guess a number between 1 & 100",
    correctAnswer: -999999,
    whatPage: false,
    
  }
  }
  setCorrectAnswer() {
      const newGameAnswer = Math.floor(Math.random()*100)+1
      this.setState({correctAnswer: newGameAnswer})
   
  }
  handleAddGuess(guess){
      let stopGuess = false;
    this.state.guessArray.find(oldguess => {
        if(oldguess === guess){
            alert('Enter a new guess!')
            stopGuess = true;
        }
    })
      if(!stopGuess) {this.toggleHotCold(guess);
             this.setState({
              guessArray:[...this.state.guessArray, guess]
        })}
     
  }

  toggleHotCold(guess) {

    if(guess < (this.state.correctAnswer + 10) && guess > (this.state.correctAnswer -10)){
      this.setState({
       isHot: "Hot"
      })
    }  else { 
        this.setState({
          isHot: "Cold"
        })
     }
     if (guess == this.state.correctAnswer) {
      this.setState({
        isHot: "You Win"
      })
  }
    console.log(`BeforeChange :: Correct Answer: ${this.state.correctAnswer}, isHot: ${this.state.isHot}, Guess: ${guess}`)
    // } else { 
    //     this.setState({
    //     isHot: "Cold"
    //     })
    //   }
    // console.log(`AfterChange :: Correct Answer: ${this.state.correctAnswer}, isHot: ${this.state.isHot}, Guess: ${guess}`)
   }

   toggleWhatPage(){
      let notWhatPage = !(this.state.whatPage)
      this.setState({whatPage: notWhatPage}) 
   }

   startNewGame(){
     this.setState({
        guessArray:[],
        isHot: "Guess a number between 1 & 100",
        correctAnswer: -999,
        whatPage: false,
      })
        this.setCorrectAnswer()
   }

    render(){
    return (
      <div>
        <Header toggleWhatPage={() => this.toggleWhatPage()}
        newGame={() => this.startNewGame()}
        whatPage={this.state.whatPage}/>
        <GuessSection isHot={ (guess) => this.toggleHotCold(guess)} 
        addGuess={ (guess) => this.handleAddGuess(guess)}
        hotColdValue={this.state.isHot}/> 
        <GuessCount count={this.state.guessArray.length} />
        <GuessList guesses={this.state.guessArray} />
      </div>
    );
   }
  componentDidMount() { 
    this.setCorrectAnswer()
  }
}

