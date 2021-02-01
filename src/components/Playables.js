import React from "react";

const style = {"height": "65px", "position": "relative"};
var humanStyle = {"height": "10px", "width": "10px", "display": "block", "position": "absolute", "padding": "0px"};
var computerStyle = {"height": "10px", "width": "10px", "display": "block", "position": "absolute", "padding": "0px"};

const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const LIZARD = "Lizard";
const SPOCK = "Vulcan";

const playItems = [ROCK, PAPER, SCISSORS, LIZARD, SPOCK];

//  Computer: [Rock, Paper, Scissors, Lizard, Spock]
const rulesTable = [
    [null, "Computer", "Human", "Human", "Computer"], // Rock
    ["Human", null, "Computer", "Computer", "Human"], // Paper
    ["Computer", "Human", null, "Human", "Computer"], // Scissors
    ["Human", "Human", "Computer", null, "Computer"], // Lizard
    ["Human", "Computer", "Human", "Computer", null] // Spock
];

function start(props) {
    window.setInterval(function() {
        var idx = Math.floor(Math.random() * playItems.length);
        var name = playItems[idx];
        props.onSelect(name);
    }, 800);
}

const Playables = props => {
    var humanPlayColumn = props.gameState[2].indexOf(1), 
    computerCodeColumn = props.gameState[3].indexOf(1);
    var hwin = props.gameState[0].reduce((accumulator, currentValue) => accumulator + currentValue)
    var cwin = props.gameState[1].reduce((accumulator, currentValue) => accumulator + currentValue);
    return (
        <div className="container-fluid">
            <div className="clearfix">
                <div className="row">
                    <div className="col">
                        <button className="btn btn-primary" onClick={() => start(props)}>Game Start</button>
                    </div>
                </div>
                <div className="row">
                    {playItems.map((name, index) => {
                        var filename = "images/icon-" + name + ".png";
                        var key = "button-" + name, humanClassName = "", computerClassName = "";
                        if(playItems.indexOf(name) === humanPlayColumn) {
                            humanClassName = "bg-success";
                        }
                        if(playItems.indexOf(name) === computerCodeColumn) {
                            computerClassName = "bg-danger";
                        }
                        return (
                            <div className="col col-lg-2" key={key}>
                                <button style={style} 
                                type="button" className="btn btn-primary btn-lg btn-block" key={index} item={name} onClick={() => 
                                    props.onSelect(name)
                                }>
                                    {name}&nbsp;
                                    <img src={filename} alt="icon" />
                                    <span style={humanStyle} className={humanClassName}></span>
                                    <span style={computerStyle} className={computerClassName}></span>
                                </button>
                            </div>
                        );
                    })}
                </div>
                <div className="text-center mt-5">
                    <p>
                    <i>Human Wins <span style={{"fontStyle": "bold", "color": "green", "height": "16px", "width": "16px"}}>{hwin}</span> times</i><br/>
                    <i>Computer Wins <span style={{"fontStyle": "bold", "color": "red", "height": "16px", "width": "16px"}}>{cwin}</span> times</i>
                    </p>
                </div>
            </div>
        </div>
    );
};

export { 
    Playables, 
    rulesTable, 
    playItems 
};