let finish = document.querySelector("#finish");
finish.addEventListener("touchend",function(){
  alert('finish');
},false);
//finish button

let tv_range = document.querySelector("#TV_range");
tv_range.addEventListener("change",function(){
  switch (tv_range.value) {
    case '0':
      tv_range.style.backgroundSize = "0% 100%";
      break;
    case '1':
      tv_range.style.backgroundSize = "20% 100%";
      break;
    case '2':
      tv_range.style.backgroundSize = "40% 100%";
      break;
    case '3':
      tv_range.style.backgroundSize = "60% 100%";
      break;
    case '4':
      tv_range.style.backgroundSize = "80% 100%";
      break;
    case '5':
      tv_range.style.backgroundSize = "100% 100%";
      break;
    default:
      break;
  }
},false);
// range


let choose_TV = document.querySelector("#choose_TV");
choose_TV.addEventListener("touchend",function(ev){
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
