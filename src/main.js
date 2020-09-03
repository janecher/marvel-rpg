import {storeState, marvelHeros, ironManAttack, spiderManAttack, blackPantherAttack, thorAttack, thanosAttack, grootAttack, captainMarvelAttack } from './marvel.js';
//import { storeState, changeGameState } from './game.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

//playerName - is a string from user select option
//arrayOfMarvelObject - our marvelHeros array imported from marvel.js
function GetHero(playerName, arrayOfMarvelObject) {
  for(let i=0; i<arrayOfMarvelObject.length; i++)
  {
    if(arrayOfMarvelObject[i].name == playerName)
    {
      return arrayOfMarvelObject[i];
    }
  }
}

function GetAttacker(playerObject) {
  if(playerObject.name == "Iron Man")
  {
    return ironManAttack;
  }
  if(playerObject.name == "Spider-Man")
  {
    return spiderManAttack;
  }
  if(playerObject.name == "Black Panther")
  {
    return blackPantherAttack;
  }
  if(playerObject.name == "Captain Marvel")
  {
    return captainMarvelAttack;
  }
  if(playerObject.name == "Groot")
  {
    return grootAttack;
  }
  if(playerObject.name == "Thor")
  {
    return thorAttack;
  }
  if(playerObject.name == "Thanos")
  {
    return thanosAttack;
  }
}

$(document).ready(function(){
  //const initialGameValues = { player1: null, player2: null, winner: null };
  const gameMaster = storeState();
  let player1Object; 
  let player2Object;
  $("#battle").hide();
  $("#marvels").submit(function(event){
    event.preventDefault();
    let player1Choose = $("#player1").val(); //Spider-Man
    let player2Choose = $("#player2").val();
    player1Object = GetHero(player1Choose, marvelHeros); //marvel object from marvel.js file
    player2Object = GetHero(player2Choose, marvelHeros);
    //const updatedGameObj = gameMaster(changeGameState("player1", "player2")(player1Object, player2Object));
    //updatedGameObj = { player1: player1Object, player2: player2Object, winner: player1Object or player2Object denepds who};
    $("#playerSelect").hide();
    $("#battle").show();
    $("#player1Health").text(player1Object.life);
    $("#player2Health").text(player2Object.life);
  });
  $("#player1Attack").click(function() {
    //attckerFunction is marvel hero attack function. like ironManAttack
    //let attackerFunction = GetAttacker(player1Object); //ironManAttack
    //console.log(attackerFunction);
    //const ironManAttack = playerAttack("life")(ironMan.strength/2);

    //calling playerAttack functioan from marvel.js we are changing player2 life property
    //let player2VSplayer1 = attackerFunction(player2Object.defense)(player2Object);
    //console.log(player2VSplayer1);
    //let player2VSplayer1 = playerAttack("life")(ironMan.strength/2)(player2Object.defense)(player2Object);

    // const playerAttack = (prop) => {
    //   return (strengthAttacker) => {
    //     return (defense) => {
    //       return (state) => ({
    //         ...state,
    //         [prop]: state[prop] - strengthAttacker + defense
                //"life": **life property value. for example =** 10 - **if the attacker is ironMaen, then =** 3 + **if the defenser is spiderMan =**5
                //"life": 10 - 3 + 5 = 12
    //       })
    //     }
    //   }
    // }

    //using storeState function we change the state of player2 object
    const player2ObjectAfterAttack = gameMaster(GetAttacker(player1Object)(player2Object.defense));
    console.log(player2Object);
    $("#player2Health").text(player2Object.life);
  });
});

