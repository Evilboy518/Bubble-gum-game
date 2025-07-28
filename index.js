var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
score += 10;
document.querySelector("#scoreval").textContent = score;
}

function GetNewHit(){
hitrn =  Math.floor(Math.random()*10)
document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){


    var clutter =  " ";

    for(var i = 1; i<=168; i++ ){
        var rn = Math.floor(Math.random()*100)
        clutter += `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;

}



function runTimer(){
   var timerint =  setInterval(function() {
    if(timer>0){
      timer--;
      document.querySelector("#timerval").textContent = timer;

    }
    else{
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML = `<h1>Game over</h1>`;
    }

 

   }, 1000)
}
runTimer();

document.querySelector("#pbtm").addEventListener("click", function(details){
var clcikednum = Number(details.target.textContent);
if(clcikednum === hitrn){
  increaseScore();
  makeBubble();
  GetNewHit();
}

})




makeBubble();
GetNewHit();
