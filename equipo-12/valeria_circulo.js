<div id="ball1" style="
  z-index:5;
  position:absolute;
  left:100px;
  bottom: 50px;
  width:100px;
  height:100px;
  border-radius:50%;
  background: #ffa333">
</div>


var velocityX = 100;
var velocityY = 100;
var positionX = 0;
var positionY = 0;
var ball1 = document.getElementById('ball1');




setInterval(function(){
    if(positionX > 1000 || positionX < 0){
        velocityX = -1*velocityX
    }
    if(positionY > 1000 || positionY < 0){
        velocityY = -1*velocityY
    }
    positionX = positionX + velocityX;
    ball1.style.left = positionX + 'px';
    
    positionY = positionY + velocityY;
    ball1.style.top = positionY + 'px';}
    ,1000);
    
    
    