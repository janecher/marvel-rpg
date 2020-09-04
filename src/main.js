import { marvelHeros, storePlayerState, heroAttack } from './marvel.js';
import { storeGameState, changeGameState, winnerDecision } from './game.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

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
  const initialGameValues = { player1: null, player2: null, winner: null };
  const gameMaster = storeGameState(initialGameValues);
  const initialPlayerValues = { name: "", life: 0, strength: 0, defense: 0};
  const player1Master = storePlayerState(initialPlayerValues);
  const player2Master = storePlayerState(initialPlayerValues);
  let player1;
  let player2;
  let game;
  $("#marvels").submit(function(event){
    event.preventDefault();
    let player1Choose = $("#player1").val(); 
    let player2Choose = $("#player2").val();
    player1 = player1Master(()=>GetHero(player1Choose, marvelHeros)); //marvel object from marvel.js file
    player2 = player2Master(()=>GetHero(player2Choose, marvelHeros));
    game = gameMaster(changeGameState("player1", "player2", "winner")(player1, player2, winnerDecision(player1, player2)));
    $("#playerSelect").hide();
    $(".battle").show();
    $("#player1Health").text(`${player1.name} life: ${player1.life}`);
    $("#player2Health").text(`${player2.name} life: ${player2.life}`);
  });
  $("#player1Attack").click(function() {
    player2 = player2Master(heroAttack(player1.strength)(player2.defense));
    game = gameMaster(changeGameState("player1", "player2", "winner")(player1, player2, winnerDecision(player1, player2)));
    $("#player2Health").text(`${player2.name} life: ${player2.life}`);
    if(game.winner != null)
    {
      $(".battle").hide();
      $("#winner").text(`${game.winner.name} win!`);
      $(".winner").show();
    }
  });
  $("#player2Attack").click(function() {
    player1 = player1Master(heroAttack(player2.strength)(player1.defense));
    game = gameMaster(changeGameState("player1", "player2", "winner")(player1, player2, winnerDecision(player1, player2)));
    $("#player1Health").text(`${player1.name} life: ${player1.life}`);
    if(game.winner != null)
    {
      $(".battle").hide();
      $("#winner").text(`${game.winner.name} win!`);
      $(".winner").show();
    }
  });
  $("#goingToStart").click(function() {
    window.location.reload();
  });
});

