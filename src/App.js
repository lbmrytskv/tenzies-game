
import React from "react"
import Die from "./Die"



export default function App() {

    //created state to hold our array of numbers
const [dice, setDice] = React.useState(allNewDice())

//function that returns an array of 10 random numbers between 1 and 6
function allNewDice() {
    const newDice = []
    //loop 10 times
    for (let i=0; i<10; i++) {
        //create a random number from 1 to 6, ceil- floors the number to a bigger one (0.986=1)
        newDice.push(Math.ceil(Math.random()*6))
    }
  return newDice
}
//passed prop to a die component through map method
const diceElements = dice.map(function(die){
    return <Die value={die}/>
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