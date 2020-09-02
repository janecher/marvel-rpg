//This function stores state

// const storeState = (initialState) => {
//   let currentState = initialState;
//   return (stateChangeFunction = state => state) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = {...newState};
//     return newState;
//   }
// }

// const changePlayerState = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//       [prop] : (state[prop] || 0) + value
//     })
//   }
// }

const ironMan = { name: "Iron Man", life: 10, strength: 6, defense: 8};
const spiderMan = { name: "Spider-Man", life: 10, strength: 8, defense: 5};
const blackPanther = { name: "Black Panther", life: 10, strength: 7, defense: 7};
const thor = { name: "Thor", life: 10, strength: 8, defense: 6};
const groot = { name: "Groot", life: 10, strength: 5, defense: 9};
const captainMarvel = { name: "Captain Marvel", life: 10, strength: 9, defense: 5};
const thanos = { name: "Thanos", life: 100, strength: 15, defense: 15};

// const ironMan = storeState({ name: "Iron Man", life: 10, strength: 6, defense: 8});
// const spiderMan = storeState({ name: "Spider-Man", life: 10, strength: 8, defense: 5});
// const blackPanther = storeState({ name: "Black Panther", life: 10, strength: 7, defense: 7});
// const thor = storeState({ name: "Thor", life: 10, strength: 8, defense: 6});
// const groot = storeState({ name: "Groot", life: 10, strength: 5, defense: 9});
// const captainMarvel = storeState({ name: "Captain Marvel", life: 10, strength: 9, defense: 5});
// const thanos = storeState({ name: "Thanos", life: 100, strength: 15, defense: 15});

const marvelHeros = [ironMan, spiderMan, blackPanther, thor, groot, captainMarvel, thanos];

export {marvelHeros}

