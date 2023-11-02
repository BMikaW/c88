
var canvas = new fabric.Canvas('myCanvas');

ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;


block_image_width = 5;
block_image_height = 5;

function loadImg(){
	fabric.Image.fromURL("golf-h.png"), function(Img){
		hole_obj = Img;
		hole_obj.scaleToWindth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x 
		});
		canvas.add(hale_obj);
	newImage();
	}}

function newImage()
{
	fabric.Image.fromURL("ball.png"), function(Img){
		hole_obj = Img;
		hole_obj.scaleToWindth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:ball_y,
			left:ball_x 
		});
		canvas.add(ball_obj);
	}
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	document.getElementById("hd3").innerHTML="Você atingiu o obgetivo!!!";
	document.getElementById("myCanvas").style.borderColor="red";
	
	{
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
		 // Escreva o código para mover a bola para baixo.
	}

	function left()
	{
		if(ball_X >5)
		{
			// Escreva o código para mover a bola para a esquerda.
		}
	}

	function right()
	{
		if(ball_X <=1050)
		{
			// Escreva o código para mover a bola para a direita.
		}
	}
	
}

