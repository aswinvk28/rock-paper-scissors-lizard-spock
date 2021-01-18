import { EVALUATE_GAME_ITEM } from "../constants/constants.js";
import { playItems, rulesTable } from '../components/Playables.js';

const evaluateGamePlay = (name) => {
    return {
      type: EVALUATE_GAME_ITEM,
      item: {
        code: Math.ceil(Math.random() * playItems.length) - 1,
        name: name,
        point: 1
      },
      evaluate: function(code) {
          if(name === playItems[code]) {
              return 0;
          }
          return rulesTable[playItems.indexOf(name)][code];
      }
    };
  };
  
  export default evaluateGamePlay;