import React from "react"

export default function Die(props) {
 
    //conditional styling for clicked dices
    const styles = {
        backgroundColor: props.isHeld === true ? "#59E391" : "white"
    }

    return (
        <div className="die-face" style={styles} onClick={props.holdDice}>
            <h2 className="die-num">{props.value}</h2>
        </div>

    )
}