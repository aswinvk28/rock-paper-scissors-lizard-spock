import React from "react";

const style = {"height": "250px"};
var humanStyle = {"height": "40px", "width": "40px", "display": "block"};
var computerStyle = {"height": "40px", "width": "40px", "display": "block"};

const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

const playItems = [ROCK, PAPER, SCISSORS];

const rulesTable = [
    [null, "Computer", "Human"],
    ["Computer", null, "Human"],
    ["Computer", "Human", null]
];

const Playables = props => {
    var humanPlayColumn = props.gameState[2].indexOf(1), 
    computerCodeColumn = props.gameState[3].indexOf(1);
    var hwin = props.gameState[0].reduce((accumulator, currentValue) => accumulator + currentValue)
    var cwin = props.gameState[1].reduce((accumulator, currentValue) => accumulator + currentValue);
    return (
        <div className="clearfix">
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
                        <div className="col col-lg-4" key={key}>
                            <button style={style} 
                            type="button" className="btn btn-primary btn-lg btn-block" key={index} item={name} onClick={() => 
                                props.onSelect(name)
                            }>
                                {name}
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
    );
};

export { 
    Playables, 
    rulesTable, 
    playItems 
};