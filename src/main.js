import {marvelHeros} from './marvel.js';
import { storeState, changeGameState, winnerDecision} from './game.js';
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

$(document).ready(function(){
  //29,30
  const initialGameValues = { player1: null, player2: null, winner: null };
  const gameMaster = storeState(initialGameValues);
  $("#marvels").submit(function(event){
    event.preventDefault();
    let player1Choose = $("#player1").val(); //Spider-Man
    let player2Choose = $("#player2").val();
    let player1Object = GetHero(player1Choose, marvelHeros); //marvel object from marvel.js file
    let player2Object = GetHero(player2Choose, marvelHeros);
    const updatedGameObj = gameMaster(changeGameState("player1", "player2", "winner")(player1Object, player2Object, winnerDecision(player1Object, player2Object)));
    $("#winner").text(updatedGameObj.winner.name);

  })
});