import { connect } from "react-redux";
import { Playables } from './../components/Playables.js';
import evaluateGamePlay from '../actions/evaluateGamePlay.js';

const mapStateToProps = state => {
    return {
        gameState: state.gameState
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelect: (name) => {
            dispatch(evaluateGamePlay(name));
        }
    };
};

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(
    Playables
);


export default GameContainer;