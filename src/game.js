export { storeGameState, changeGameState, winnerDecision }

const storeGameState = (gameState) => {
  let currentState = gameState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

//this function will update all three properties in game object
//prop1 = player1, prop2 = player2, propWinner = winner
const changeGameState = (prop1, prop2, propWinner) => {
  return (value1, value2, winnerValue) => {
    return (state) => ({
      ...state,
      //value will be player "object" - like player1 which is a marvel hero
      [prop1] : value1,
      [prop2] : value2,
      [propWinner] : winnerValue
    })
  }
}

const winnerDecision = function(player1, player2){
  if(player1.life <= 0 && player2.life > 0) {
    return player2;
  } else if (player2.life <= 0 && player1.life > 0) {
    return player1;
  } else {
    return null;
  }
}