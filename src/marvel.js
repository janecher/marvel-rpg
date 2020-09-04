export { marvelHeros, storePlayerState, heroAttack }

const storePlayerState = (initialState) => {
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
      return (state) => {
        if(strengthAttacker - defense <= 0) {
          return {
            ...state,
            [prop] : state[prop] - 1
          }
        } else {
          return {
            ...state,
            [prop] : state[prop] - strengthAttacker + defense
          }
        }
      }
    }
  }
}

const heroAttack = playerAttack("life");

const ironMan = storePlayerState({ name: "Iron Man", life: 10, strength: 8, defense: 7})();
const spiderMan = storePlayerState({ name: "Spider-Man", life: 10, strength: 7, defense: 6})();
const blackPanther = storePlayerState({ name: "Black Panther", life: 10, strength: 7, defense: 6})();
const thor = storePlayerState({ name: "Thor", life: 10, strength: 8, defense: 6})();
const groot = storePlayerState({ name: "Groot", life: 10, strength: 5, defense: 8})();
const captainMarvel = storePlayerState({ name: "Captain Marvel", life: 10, strength: 8, defense: 5})();
const thanos = storePlayerState({ name: "Thanos", life: 20, strength: 10, defense: 7})();

const marvelHeros = [ironMan, spiderMan, blackPanther, thor, groot, captainMarvel, thanos];