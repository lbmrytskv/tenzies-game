
import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"



export default function App() {

    //created state to hold our array of numbers
const [dice, setDice] = React.useState(allNewDice())


function generateNewDie() {
    return {
        value: Math.ceil(Math.random()*6),
        isHeld: false,
        id:nanoid()
    }
}
//function that returns an array of objects
function allNewDice() {
    const newDice = []
    //loop 10 times
    for (let i=0; i<10; i++) {
        newDice.push({
            value: Math.ceil(Math.random()*6),
            isHeld: false,
            id:nanoid()

    })}
  return newDice
}
//passed props to a die component through map method
const diceElements = dice.map(function(die){
    return <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={()=>{holdDice(die.id)}}/>
})

//function that keeps held dices after pressing a roll button
function newDices() {
    setDice(oldDice => oldDice.map(die =>{
        return die.isHeld === false ? generateNewDie() : die
    }))
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
            <div className="dice-container">
            {diceElements}
            </div>
<button className="roll-button" onClick={newDices}>Roll</button>
        </main>
    )
}