//main.js : draws the elements on the screen 

var canvas = document.querySelector('canvas')
canvas.width = window.innerWidth;
canvas.height = 700;

var ctx = canvas.getContext('2d'); 

values = {
	w0:{
		in:2,
		out:0
	},
	x0:{
		in:-1,
		out:0
	},
	w1:{
		in:-3,
		out:0
	},
	x1:{
		in:-2,
		out:0
	},
	w2:{
		in:-3, 
		out:0 
	},
	l1:{
		in:0,
		out:0
	},
	l2:{
		in:0,
		out:0
	},
	l3:{
		in:0,
		out:0
	},
	s1:{
		in:0,
		out:0
	},
	s2:{
		in:0,
		out:0
	},
	s3:{
		in:0,
		out:0
	},
	s4:{
		in:0,
		out:0
	},
	s5:{
		in:0,
		out:0
	}
}

function drawLabel(label,x,y){
	ctx.font = '20px serif';
	ctx.fillStyle = 'black'; 
	ctx.fillText(label, x,y); 
}

function drawInLabel(label, x, y){
	ctx.font = '20px serif'; 
	ctx.fillStyle = 'green'; 
	ctx.fillText(label, x, y-10); 
}

function drawOutLabel(label, x, y){
	ctx.font = '20px serif'; 
	ctx.fillStyle = 'red'; 
	ctx.fillText(label, x-20, y+20); 
}

function drawLabelCircle(label, x, y){
	drawLabel(label,x,y);
	var text = ctx.measureText(label) 
	var textSize = text.width; 
	if (textSize < 28){
		textSize = 28;
	}
	ctx.beginPath();
	ctx.arc(x+textSize/2, y-textSize/8, textSize, 0, Math.PI * 2, true);
	ctx.stroke();
}

function drawFirstNodes(){
	drawLabelCircle("*", 250, 250);
	drawLabelCircle("*", 250, 450);
}

function drawSecondNode(){
	drawLabelCircle("+", 450, 350);
}

function drawLineNodes(){
	drawLabelCircle("+", 550, 500)
	drawLabelCircle("*-1", 750, 500)
	drawLabelCircle("exp", 950, 500)
	drawLabelCircle("+1", 1150, 500)
	drawLabelCircle("1/x", 1350, 500)
}

function drawWeightAndInputLabels(){
	drawLabel("w0", 50, 150);
	drawLabel("x0", 50, 350);
	drawLabel("w1", 50, 400);
	drawLabel("x1", 50, 550);
	drawLabel("w2", 50, 650)
}

function drawLine(x1,y1,x2,y2){
	ctx.beginPath(); 
	ctx.moveTo(x1, y1); 
	ctx.lineTo(x2,y2); 
	ctx.stroke();
	ctx.fill(); 
	ctx.closePath();
}

function drawLabelInLine(label, x1,y1,x2,y2){
	x = (x1+x2)/2
	y = (y1+y2)/2 
	drawInLabel(label.toFixed(2), x, y); 
}

function drawLabelOutLine(label, x1,y1,x2,y2){
	x = (x1+x2)/2
	y = (y1+y2)/2 
	drawOutLabel(label.toFixed(2), x, y); 
}

function drawFirstLines(){
	drawLine(80,145, 235, 235);
	drawLabelInLine(values.w0.in,80,145, 235, 235)
	drawLabelOutLine(values.w0.out,80,145, 235, 235)

	drawLine(80,345, 235, 265);
	drawLabelInLine(values.x0.in,80,345, 235, 265)
	drawLabelOutLine(values.x0.out,80,345, 235, 265)

	drawLine(80,395, 230, 445);
	drawLabelInLine(values.w1.in,80,395, 230, 445)
	drawLabelOutLine(values.w1.out,80,395, 230, 445)

	drawLine(80,545, 230, 465);
	drawLabelInLine(values.x1.in,80,545, 230, 465)
	drawLabelOutLine(values.x1.out,80,545, 230, 465)

	drawLine(80,645, 530, 505);
	drawLabelInLine(values.w2.in,80,645, 530, 505)
	drawLabelOutLine(values.w2.out,80,645, 530, 505)
}

function drawSecondLines(){
	drawLine(300, 250, 430, 330);
	drawLabelInLine(values.l1.in,300, 250, 430, 330)
	drawLabelOutLine(values.l1.out,300, 250, 430, 330)

	drawLine(300, 450, 430, 350);
	drawLabelInLine(values.l2.in,300, 450, 430, 350)
	drawLabelOutLine(values.l2.out,300, 450, 430, 350)

	drawLine(480, 370,  550, 470);
	drawLabelInLine(values.l3.in,480, 370,  550, 470)
	drawLabelOutLine(values.l3.out,480, 370,  550, 470)
}

function drawThirdLines(){
	drawLine( 600, 500,  730, 500);
	drawLabelInLine(values.s1.in,600, 500,  730, 500)
	drawLabelOutLine(values.s1.out,600, 500,  730, 500)

	drawLine( 800, 500, 930, 500  );
	drawLabelInLine(values.s2.in,800, 500, 930, 500  )
	drawLabelOutLine(values.s2.out,800, 500, 930, 500  )
	
	drawLine( 1000, 500, 1130, 500  );
	drawLabelInLine(values.s3.in,1000, 500, 1130, 500  )
	drawLabelOutLine(values.s3.out,1000, 500, 1130, 500  )

	drawLine( 1200, 500, 1330, 500  );
	drawLabelInLine(values.s4.in,1200, 500, 1330, 500    )
	drawLabelOutLine(values.s4.out,1200, 500, 1330, 500   )

	drawLine( 1400, 500, 1530, 500  );
	drawLabelInLine(values.s5.in,1400, 500, 1530, 500   )
	drawLabelOutLine(values.s5.out,1400, 500, 1530, 500   )
}


x0 = 2; 
x1 = 3; 

function paint(){
	ctx.clearRect(0,0, canvas.width, canvas.height);
	drawFirstNodes();
	drawSecondNode();
	drawLineNodes();
	drawWeightAndInputLabels();
	drawFirstLines();
	drawSecondLines();
	drawThirdLines();
	forwardProp();
	backwardProp();
	requestAnimationFrame(paint); 
}

function forwardProp(){

	values.l1.in = values.w0.in * values.x0.in;   
	values.l2.in = values.w1.in * values.x1.in;

	values.l3.in = values.l1.in + values.l2.in; 

	values.s1.in = values.l3.in + values.w2.in; 
	values.s2.in = values.s1.in * -1; 
	values.s3.in = Math.exp(values.s2.in) 
	values.s4.in = values.s3.in + 1; 
	values.s5.in = 1/values.s4.in
}

function backwardProp(){
	values.s5.out = values.s5.in/values.s5.in; 
	values.s4.out = values.s5.out * -1/(values.s4.in*values.s4.in);
	values.s3.out = values.s4.out * 1;	
	values.s2.out = values.s3.out * Math.exp(values.s2.in); 
	values.s1.out = values.s2.out * -1; 

	values.w2.out = values.s1.out * 1; 
	values.l3.out = values.s1.out * 1;
	values.l2.out = values.l3.out * 1; 
	values.l1.out = values.l3.out * 1; 

	values.w0.out = values.l1.out * values.x0.in; 
	values.x0.out = values.l1.out * values.w0.in; 
	values.w1.out = values.l2.out * values.x1.in; 
	values.x1.out = values.l2.out * values.w1.in; 
}

paint();
