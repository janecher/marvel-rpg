//This function stores state
export {marvelHeros}

const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const playerAttack = (prop) => {
  return (strengthAttacker) => {
    return (defense) => {
      return (state) => ({
        ...state,
        [prop]: state[prop] - strengthAttacker + defense
      })
    }
  }
}

// const changePlayerState = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//       [prop] : (state[prop] || 0) + value
//     })
//   }
// }

const ironMan = storeState({ name: "Iron Man", life: 10, strength: 6, defense: 8})();
const spiderMan = storeState({ name: "Spider-Man", life: 10, strength: 8, defense: 5})();
const blackPanther = storeState({ name: "Black Panther", life: 10, strength: 7, defense: 7})();
const thor = storeState({ name: "Thor", life: 10, strength: 8, defense: 6})();
const groot = storeState({ name: "Groot", life: 10, strength: 5, defense: 9})();
const captainMarvel = storeState({ name: "Captain Marvel", life: 10, strength: 9, defense: 5})();
const thanos = storeState({ name: "Thanos", life: 100, strength: 15, defense: 15})();

const marvelHeros = [ironMan, spiderMan, blackPanther, thor, groot, captainMarvel, thanos];

const ironManAttack = playerAttack("life")(ironMan.strength/2);
const spiderManAttack = playerAttack("life")(spiderMan.strength/2);
const blackPantherAttack = playerAttack("life")(blackPanther.strength/2);
const thorAttack = playerAttack("life")(thor.strength/2);
const grootAttack = playerAttack("life")(groot.strength/2);
const capitainMarvelAttack = playerAttack("life")(captainMarvel.strength/2);
const thanosAttack = playerAttack("life")(thanos.strength/2);


const spiderManVsIronMan = ironManAttack(spiderMan.defense)(spiderMan);
const spiderManAfterIronManAttack = storeState(spiderManVsIronMan)();

// const ironMan = { name: "Iron Man", life: 10, strength: 6, defense: 8};
// const spiderMan = { name: "Spider-Man", life: 10, strength: 8, defense: 5};
// const blackPanther = { name: "Black Panther", life: 10, strength: 7, defense: 7};
// const thor = { name: "Thor", life: 10, strength: 8, defense: 6};
// const groot = { name: "Groot", life: 10, strength: 5, defense: 9};
// const captainMarvel = { name: "Captain Marvel", life: 10, strength: 9, defense: 5};
// const thanos = { name: "Thanos", life: 100, strength: 15, defense: 15};


