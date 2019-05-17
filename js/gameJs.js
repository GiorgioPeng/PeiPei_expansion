let choose_game = document.querySelector("#choose_game");
choose_game.addEventListener("touchend",function(ev){
  let event = ev||window.event;
  let target = event.target||event.srcElement;
  switch (target.className) {
    case "items":
      target.className = "itemsChecked"
      break;
    case "itemsChecked":
      target.className = "items";
      break;
    default:
      break;
  }
},false);
//


let next = $("#next");
next[0].addEventListener("touchend",function(){
  $("#choose_game").toggle();
  $("#choose_TV").toggle();
  $("#other_game").toggle();
  $("#other_TV").toggle();
},false)
//
let game_range = document.querySelector("#game_range");
game_range.addEventListener("change",function(){
  switch (game_range.value) {
    case '0':
      game_range.style.backgroundSize = "0% 100%";
      break;
    case '1':
      game_range.style.backgroundSize = "20% 100%";
      break;
    case '2':
      game_range.style.backgroundSize = "40% 100%";
      break;
    case '3':
      game_range.style.backgroundSize = "60% 100%";
      break;
    case '4':
      game_range.style.backgroundSize = "80% 100%";
      break;
    case '5':
      game_range.style.backgroundSize = "100% 100%";
      break;
    default:
      break;
  }
},false);
// range
