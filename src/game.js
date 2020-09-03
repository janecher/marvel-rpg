export { storeState, changeGameState}

const storeState = (gameState) => {
  let currentState = gameState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

//this function will update all three properties in game object
//prop1 = player1, prop2 = player2, propWinner = winner
const changeGameState = (prop1, prop2) => {
  return (value1, value2) => {
    return (state) => ({
      ...state,
      //value will be player "object" - like player1 which is a marvel hero
      [prop1] : value1,
      [prop2] : value2
      //[propWinner] : winnerValue
    })
  }
}

// function that stores our game state
//line26-27 create "game object" with initial values as null for properties player1, player2, winner 

// const initialGameValues = { player1: null, player2: null, winner: null };
// const gameMaster = storeState(initialGameValues);

//this function return player object which is stronger and is winner
// const winnerDecision = function(player1, player2){
//   if(player1.strength > player2.strength)
//   {
//     return player1;
//   } else {
//     return player2;
//   }
// }

//we will have a list of players - which are marvel heros
//user choose two players - player1(for example ironMan) and player2(spiderMan)
//then winner will show up based on players strength
//using changeGameState as our function factory for the game data
//line 46 update all properties in game object based on user choose, and result of winnerDecision fucntion

//const updateGameObjectToGameResult = changeGameState("player1", "player2", "winner");//(player1, player2, winnerDecision(player1, player2));

//ironMan amd spiderMan should be player objects, we will get them from marvel.js and user interuction

//const updatedGameObj = gameMaster(updateGameObjectToGameResult(player1, player2, winnerDecision(player1, player2)));

// updatedGameObj = { player1: ironMan, player2: spiderMan, winner: spiderMan };


//const updatedGameObj = gameMaster(changeGameState("player1", "player2", "winner")(player1Object, player2Object, winnerDecision(player1Object, player2Object)));