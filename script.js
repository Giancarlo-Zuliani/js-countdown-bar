var bar =  document.getElementById('timebar');
var width = 100;
var timer;
var i = 0;

function move(){
  if(i===0){
    timer = setInterval(move , 1)
    i = 1
    width=100;
  }
  width -= .1
  if(width <= 0){
    clearInterval(timer);
  }
  bar.style.width = width +"%";
  bar.innerHTML = width.toFixed(0) +"%"
};
