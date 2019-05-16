let finish = document.querySelector("#finish");
finish.addEventListener("click",function(){
  alert('finish');
},false);
//finish button

let range = document.querySelector("input[type='range']");
range.addEventListener("change",function(){
  switch (range.value) {
    case '0':
      range.style.backgroundSize = "0% 100%";
      break;
    case '1':
      range.style.backgroundSize = "20% 100%";
      break;
    case '2':
      range.style.backgroundSize = "40% 100%";
      break;
    case '3':
      range.style.backgroundSize = "60% 100%";
      break;
    case '4':
      range.style.backgroundSize = "80% 100%";
      break;
    case '5':
      range.style.backgroundSize = "100% 100%";
      break;
    default:
      break;
  }
},false);
// range


let choose = document.querySelector("#choose");
choose.addEventListener("click",function(ev){
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
