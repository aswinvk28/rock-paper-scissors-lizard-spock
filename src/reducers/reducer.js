import { combineReducers } from "redux";
import {
  EVALUATE_GAME_ITEM
} from "../constants/constants.js";
import { playItems } from '../components/Playables.js';

var stateData = [];

for(var i = 0; i < 4; i++) {
    stateData.push([0, 0, 0]);
}

const gameState = (state = stateData, action) => {
    switch (action.type) {
        case EVALUATE_GAME_ITEM:
            var stateCopy = [];
            var evaluate = action.evaluate(action.item.code);
            for(var s in state) {
                stateCopy.push([...state[s]]);
            }
            stateCopy[2] = [0,0,0]; // human
            stateCopy[2][playItems.indexOf(action.item.name)] = 1;
            stateCopy[3] = [0,0,0]; // computer
            stateCopy[3][action.item.code] = 1;
            if(evaluate === "Human") {
                stateCopy[0][playItems.indexOf(action.item.name)] += action.item.point;
            } else if(evaluate === "Computer") {
                stateCopy[1][action.item.code] += action.item.point;
            }
            console.log(stateCopy);
            return stateCopy;
            break;
        default:
            return state;
            break;
    }
};

const reducer = combineReducers({
    gameState
});

export default reducer;