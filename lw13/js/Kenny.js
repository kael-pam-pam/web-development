function drawKennyLegs(ctx) {
  //Ноги
  ctx.fillStyle = '#f56900';
  ctx.fillRect(60,341, 161,33);
  //Ступни
  ctx.lineCap = "round";
  ctx.lineWidth = 7;
  ctx.moveTo(55,373);
  ctx.lineTo(224,373);
  ctx.stroke();
  ctx.lineWidth = 1;
  ctx.lineCap = 'butt';
}

function drawKennyJacket(ctx) {
  //куртка
  ctx.beginPath();
  ctx.moveTo(51,244)
  ctx.quadraticCurveTo(30,260, 23,308);
  ctx.lineTo(51,322);
  ctx.quadraticCurveTo(50,325, 49,339);
  ctx.quadraticCurveTo(141,365, 231,344);
  ctx.quadraticCurveTo(233,336, 230,322);
  ctx.lineTo(255,317);
  ctx.quadraticCurveTo(260,290, 231,242);
  ctx.closePath();
  ctx.fillStyle = '#f66700';
  ctx.fill();  
  //молния
  ctx.beginPath();
  ctx.moveTo(141,282);
  ctx.lineTo(141,352);
  ctx.lineWidth = 1.5;
  ctx.stroke();
  //руки левая и правая
  ctx.beginPath();
  ctx.moveTo(57,295);
  ctx.quadraticCurveTo(54,310, 50,319);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(220,295);
  ctx.quadraticCurveTo(222,308, 223,316);
  ctx.stroke();
  ctx.lineWidth = 1;
}

function drawKennyWrists(ctx) {
  //Левая варежка
  ctx.beginPath();
  ctx.arc(31.5, 323, 19.3, 0, 2*Math.PI);
  ctx.fillStyle = '#82471c';
  ctx.fill();
  //Правая варежка
  ctx.beginPath();
  ctx.arc(245, 326, 19.9, 0, 2*Math.PI);
  ctx.fill();
  //Левый большой палец
  ctx.beginPath();
  ctx.arc(45.5, 318.5, 8.5, 0, 2*Math.PI);
  ctx.strokeStyle = '#30120b';
  ctx.fillStyle = '#82471c';
  ctx.fill();
  ctx.stroke();
  //Правый большой палец
  ctx.beginPath();
  ctx.arc(229, 318, 8.5, 0, 2*Math.PI);
  ctx.fill();
  ctx.stroke();
}

function drawKennyFace(ctx) {
  //Кожа
  ctx.beginPath();
  ctx.ellipse(138.5, 143, 59.5, 74.5, 0, 0, 2 * Math.PI);
  ctx.fillStyle = '#ffdead';
  ctx.fill();
  //Глаза
  ctx.beginPath();
  ctx.ellipse(106, 137.5, 31, 39.3, 0.5, 0, 2 * Math.PI);
  ctx.fillStyle = '#fcfcfc';
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(170, 143, 32, 39.3, -0.3, 0, 2 * Math.PI);
  ctx.fill();
  //Зрачки
  ctx.beginPath();
  ctx.arc(115, 136, 5, 0, 2 * Math.PI);
  ctx.fillStyle = '#17111e';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(164.5, 139, 5, 0, 2 * Math.PI);
  ctx.fill();
  //Ресницы
  ctx.beginPath();
  ctx.ellipse(106, 137.5, 31, 39.3, 0.5, 1.19 * Math.PI, 1.75 * Math.PI);
  ctx.strokeStyle = '#c6a883';
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(170, 143, 32, 39.3, -0.3, 1.19 * Math.PI, 1.75 * Math.PI);
  ctx.stroke();
  //Переносица
  ctx.beginPath();
  ctx.moveTo(139,127);
  ctx.arcTo(135, 134, 138, 143, 20);
  ctx.strokeStyle = '#787678';
  ctx.stroke();
  //Тень на левом глазу
  ctx.beginPath();
  ctx.moveTo(95,98);
  ctx.quadraticCurveTo(72,135, 86,177);
  ctx.strokeStyle = '#9da5a9';
  ctx.lineWidth = 6;
  ctx.stroke();
  ctx.lineWidth = 1;
}

function drawKennyHead(ctx) {
  //Голова
  ctx.beginPath();
  ctx.arc(141.5, 143.5, 136.5, 0, 2 * Math.PI);
  ctx.fillStyle = '#f66700';
  ctx.fill();
  
  drawKennyFace(ctx); 
  
  //Шнурки
  ctx.beginPath();
  ctx.ellipse(138, 153, 97, 86, 0, 0, 2 * Math.PI);
  ctx.strokeStyle = '#301e1a';
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(119,260);
  ctx.quadraticCurveTo(128,240, 133,218);
  ctx.bezierCurveTo(138,229, 137,260, 141,271);
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.lineWidth = 1;
  //Отвороты капюшона
  ctx.beginPath();
  ctx.moveTo(139,67);
  ctx.bezierCurveTo(20,60, 20,225, 134,217);
  ctx.bezierCurveTo(60,180, 62,105, 139,67);
  ctx.fillStyle = '#80451a';
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(142,68);
  ctx.quadraticCurveTo(200,110, 193,157);
  ctx.quadraticCurveTo(170,200, 135,216);
  ctx.bezierCurveTo(240,240, 260,76, 142,68);
  ctx.fill();
  //Тень от капюшона
  ctx.beginPath();
  ctx.arc(141.5, 144, 136.5, 0.31*Math.PI, 0.733*Math.PI);
  ctx.strokeStyle = '#e35600';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.lineWidth = 1;
}

function drawKenny(canvasName) {
  const canvas = document.getElementById(canvasName);
  const context = canvas.getContext('2d');
  drawKennyLegs(context);
  drawKennyJacket(context);
  drawKennyWrists(context);
  drawKennyHead(context);  
}