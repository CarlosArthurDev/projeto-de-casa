
var canvas = new fabric.Canvas("myCanvas")

ballY=0;
ballX=0;
holeY=400;
holeX=800;

blockImageWidth = 5;
blockImageHeight = 5;

function loadImg(){
	fabric.Image.fromURL("golf.h.png", function(Img){
        holeObj=Img;
        holeObj.scaleToWidth(50);
        holeObj.scaleToHeight(50);
        holeObj.set({
             top:holeY,
			 left:holeX
         });
         canvas.add(holeObj);
		 newImage();
     })
	
	
}

	
function newImage()
{
	fabric.Image.fromURL("ball.png", function(Img){
        ballObj=Img;
        ballObj.scaleToWidth(50);
        ballObj.scaleToHeight(50);
        ballObj.set({
             top:ballY,
			 left:ballY
         });
         canvas.add(holeObj);
		 newImage();
     })

}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ballY==holeX)&&(ballY==holeY)) {
	canvas.remove(ballObj)	
   document.getElementById("hd3").innerHTML="Voce voce atingiu o objetivo"
   document.getElementById("myCanvas").style.borderColor-"red";

	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Escreva o código para mover a bola para cima.
	}

	function down()
	{
		if(ballY <=450)
		ballY= ballY + blockImageHeight;
		console.log("Altura da imagem do bloco - "+ blockImageHeight)
		console.log("quando a tecla direcional baixo e pressionada, X = " + ballX+ ", Y"+ ballY)
	}

	function left()
	{
		if(ballX >5)
		{
		ballX= ballX + blockImageHeight;
		console.log("Altura da imagem do bloco - "+ blockImageHeight)
		console.log("quando a tecla direcional baixo e pressionada, X = " + ballX+ ", Y"+ ballY)
		}
	}

	function right()
	{
		if(ballX <=1050)
		{
			if(ballY <=1050)
		ballY= ballY + blockImageHeight;
		console.log("Altura da imagem do bloco - "+ blockImageHeight)
		console.log("quando a tecla direcional baixo e pressionada, X = " + ballX+ ", Y"+ ballY)
		}
	}
	
}

