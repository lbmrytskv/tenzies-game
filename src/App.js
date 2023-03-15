
import React from "react"
import Die from "./Die"



export default function App() {

    //created state to hold our array of numbers
const [dice, setDice] = React.useState(allNewDice())

//function that returns an array of objects
function allNewDice() {
    const newDice = []
    //loop 10 times
    for (let i=0; i<10; i++) {
        newDice.push({
            value: Math.ceil(Math.random()*6),
            isHeld: false

    })}
  return newDice
}
//passed prop to a die component through map method
const diceElements = dice.map(function(die){
    return <Die value={die.value}/>
})

//
function newDices() {
    setDice(allNewDice())
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