import React, { useState } from "react";

import "./EightBall.css"

function EightBall(props) {

    const { predictions } = props;;

    const [color, setColor] = useState("black");
    const [ pred, setPred ] = useState("Click me to find out!");

    const shakeBall = () => {
        let randI = Math.floor(Math.random() * predictions.length)
        const { msg, color } = predictions[randI];
        setColor(color);
        setPred(msg);
    }

    const resetBall = () => {
        setColor("black");
        setPred("Click me to find out!")
    }

    return (
        <div className="EightBall"> 
            <h1> Magic Eightball </h1>
            <div className="EightBall-ball"
                 style={{backgroundColor: color}}
                 onClick={shakeBall}>
                <h1 className="EightBall-message" style={{color: "white"}}>
                    {pred}
                </h1>
            </div>
            <button className="EightBall-reset" onClick={resetBall}>Reset</button>
        </div>
    )
}

EightBall.defaultProps = {
    predictions: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" }
      ]
}




export default EightBall;