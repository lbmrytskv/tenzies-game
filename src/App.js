
import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'






export default function App() {

    //created state to hold our array of numbers
const [dice, setDice] = React.useState(allNewDice())

//state to represent if user has won the game or not  
const [tenzies, setTenzies] = React.useState(false)

React.useEffect( ()=> {
    //allHeld variable keeps an isHeld property of all dices
    const allHeld = dice.every(die => die.isHeld) //every - determines whether all elem of array satisfy the test
    //we took firsValue of an array to compare it with another ones later
    const firstValue = dice[0].value
    const sameValues = dice.every(die => die.value === firstValue)
   if (allHeld && sameValues) {
       setTenzies(true) 
       console.log("You won!")}
    }, [dice]) 

//function for generating a new value of a die
function generateNewDie() {
    return {
        value: Math.ceil(Math.random()*6),
        isHeld: false,
        id:nanoid()
}}

//function that returns an array of objects
function allNewDice() {
    const newDice = []
    //loop 10 times
    for (let i=0; i<10; i++) {
        newDice.push(
           generateNewDie()
    )}
  return newDice
}
//passed props to a Die component through the map method
const diceElements = dice.map(function(die){
    return <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={()=>{holdDice(die.id)}}/>
})




//function that keeps selected dices held after pressing a roll button
function newDices() { if (tenzies===false){
    setDice(oldDice => oldDice.map(die =>{
        return die.isHeld === false ? generateNewDie() : die
    }))} 
    else {
        setTenzies(false)
        setDice(allNewDice()) 
    }
}

//created a function which flips the "isHeld" property on the object in an array which was clicked
function holdDice(id) {
     setDice(oldDice => oldDice.map(die =>{
        return die.id === id ?
        {...die, isHeld: !die.isHeld} :
        die
     }  ))
     
}

    return (
        <main>
            {tenzies && <Confetti/>}
            <h1 className="Title">Tenzies</h1>
            <p className="instructions">{!tenzies ? "Roll until all dice are the same. Click each die to freeze it at its current value between rolls."
             :"Congratulations, You have won!" }</p>
            <div className="dice-container">
            {diceElements}
            </div>
<button className="roll-button" onClick={newDices}>{tenzies ? "New Game": "Roll"}</button>
        </main>
    )
}

