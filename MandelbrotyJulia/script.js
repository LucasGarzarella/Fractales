// Sliders

let sliderR = document.getElementById("sliderR");
var outputR = document.getElementById("valueR");
outputR.innerHTML = "50%";

sliderR.oninput = function() {
outputR.innerHTML = this.value+ "0%";
draw()
}

let sliderG = document.getElementById("sliderG");
var outputG = document.getElementById("valueG");
outputG.innerHTML = "50%";

sliderG.oninput = function() {
outputG.innerHTML = this.value+ "0%";
draw()
}

let sliderB = document.getElementById("sliderB");
var outputB = document.getElementById("valueB");
outputB.innerHTML = "50%";

sliderB.oninput = function() {
outputB.innerHTML = this.value + "0%" ;
draw()
}

//Declarar todas las variables globales
var canvas, height, width, scale, xOffset, yOffset;
        
function setUp(){
  canvas = document.getElementById('Brot');
  height = canvas.getAttribute("height");
  width = canvas.getAttribute("width");
  scale = width*0.4;
  xOffset = width*0.75;
  yOffset = height*0.5;
  sliderR.value = 5
  sliderG.value = 5
  sliderB.value = 5

  //Agrego el evento onmousemove al canvas que agarra "eventData" (posición x, y) cuando paso el mouse arriba del primer canvas y se los paso a la función que se ocupa de usarlos "juliaDraw" (que dibuja el segundo canvas)
  canvas.onmousemove = function(eventData){juliaDraw(eventData)};
  
  draw();
}