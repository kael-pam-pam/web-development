function drawCartmanLegs(ctx) {
  //Штаны
  ctx.beginPath();
  ctx.moveTo(45,328);
  ctx.quadraticCurveTo(52,352, 62,374);
  ctx.lineTo(353,374);
  ctx.quadraticCurveTo(362,352, 368,328);
  ctx.closePath();
  ctx.fillStyle = '#82462b';
  ctx.fill();
  //Ступни
  ctx.beginPath();
  ctx.moveTo(52,371);
  ctx.bezierCurveTo(89,368, 161,350, 209,374);
  ctx.quadraticCurveTo(287,353, 361,374);
  ctx.lineTo(362,378);
  ctx.quadraticCurveTo(287,370, 217,378);
  ctx.quadraticCurveTo(137,370, 55,379);
  ctx.quadraticCurveTo(48,376, 52,371);
  ctx.fillStyle = '#2f2b3a';
  ctx.fill();
}

function drawCartmanJacket(ctx) {
  //куртка
  ctx.beginPath();
  ctx.moveTo(71,185);
  ctx.bezierCurveTo(45,191, 25,224, 15,240);
  ctx.lineTo(29,287);
  ctx.quadraticCurveTo(31,290, 36,322);
  ctx.bezierCurveTo(105,385, 240,352, 249,354);
  ctx.lineTo(285, 342);
  ctx.quadraticCurveTo(405,348, 391,280);
  ctx.lineTo(396,230);
  ctx.lineTo(385,220);
  ctx.bezierCurveTo(380,215, 375,190, 340,186);
  ctx.closePath();
  ctx.fillStyle = '#ff1f41';
  ctx.fill();
  //молния
  ctx.beginPath();
  ctx.moveTo(228,261);
  ctx.lineTo(225,357);
  ctx.strokeStyle = '#292635';
  ctx.stroke();
  //кнопки
  ctx.beginPath();
  ctx.ellipse(216, 271, 2.3, 4.5, 0, 0, 2 * Math.PI);
  ctx.fillStyle = '#292635';
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(219.5, 307, 2.3, 4.5, 0, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(216.5, 341.5, 2.3, 4.5, 0, 0, 2 * Math.PI);
  ctx.fill();
}

function drawCartmanWrists(ctx) {
  ctx.beginPath();
  ctx.moveTo(364,231);
  ctx.lineTo(349,251);
  ctx.quadraticCurveTo(348,259, 342,262);
  ctx.quadraticCurveTo(332,280, 360,277);
  ctx.quadraticCurveTo(389,299, 412,271);
  ctx.lineTo(405,233);
  ctx.quadraticCurveTo(395,222, 364,231);
  ctx.fillStyle = '#ffe01d';
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(73,261);
  ctx.bezierCurveTo(-14,192, -8,290, 31,292);
  ctx.lineTo(75,288);
  ctx.quadraticCurveTo(90,275, 74,265);
  ctx.closePath();
  ctx.fill();
}

function drawCartmanMouth(ctx) {
  //Рот
  ctx.beginPath();
  ctx.moveTo(185,214);
  ctx.lineTo(196,211);
  ctx.lineTo(233,211);
  ctx.quadraticCurveTo(235.5,213, 234,218)
  ctx.lineTo(227,236);
  ctx.lineTo(202,231);
  ctx.closePath();
  ctx.fillStyle = 'black';
  ctx.fill();
  //Зубы
  ctx.beginPath();
  ctx.moveTo(196,217);
  ctx.quadraticCurveTo(200.5,210, 232,214);
  ctx.lineTo(231,220);
  ctx.quadraticCurveTo(211,221, 196,217);
  ctx.fillStyle = 'white';
  ctx.fill();
  //Разделение зубов
  ctx.beginPath();
  ctx.moveTo(207,219);
  ctx.lineTo(207,213);
  ctx.moveTo(219,220);
  ctx.lineTo(219,213);
  ctx.strokeStyle = 'black';
  ctx.stroke();
}

function drawCartmanEyes(ctx) {
  //Ресницы
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(253, 140, 35, 43.5, -0.5, 1.33 * Math.PI, 1.84 * Math.PI);
  ctx.strokeStyle = '#d1c0a3';
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(176, 139, 35, 43.5, 0.5, 1.05 * Math.PI, 1.7 * Math.PI);
  ctx.stroke();
  ctx.lineWidth = 1;
  //Глаза
  ctx.beginPath();
  ctx.ellipse(176, 140, 37, 43.5, 0.5, 0, 2 * Math.PI);
  ctx.fillStyle = '#fdfdfd';
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(253, 141, 37, 43.5, -0.5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(190, 137, 4, 0, 2 * Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(236, 138, 4, 0, 2 * Math.PI);
  ctx.fill();
  //Переносица
  ctx.beginPath();
  ctx.ellipse(252, 141, 37, 43.5, -0.5, 1.14 * Math.PI, 1.27 * Math.PI);
  ctx.strokeStyle = 'black';
  ctx.stroke();
}

function drawCartmanFace(ctx) {
  ctx.beginPath();
  ctx.ellipse(207, 142.5, 150, 122.5, 0, 0, 2 * Math.PI);
  ctx.fillStyle = '#fff1c7';
  ctx.fill();
  
  drawCartmanEyes(ctx);
  drawCartmanMouth(ctx);
  
  //подбородки
  ctx.beginPath();
  ctx.moveTo(192,238);
  ctx.quadraticCurveTo(218,244, 245,237);
  ctx.moveTo(92,208);
  ctx.quadraticCurveTo(212,301, 330,200);
  ctx.strokeStyle = 'black';
  ctx.stroke();
}

function drawCartmanHat(ctx) {
  ctx.beginPath();
  ctx.ellipse(207.5, 141, 151.5, 122.5, 0, 1.024 * Math.PI, 1.927 * Math.PI);
  ctx.quadraticCurveTo(205,55, 57,132);
  ctx.fillStyle = '#00b9c7';
  ctx.fill();
  //Тень от загиба шапки
  ctx.beginPath();
  ctx.moveTo(58,132);
  ctx.bezierCurveTo(165,70, 260,70, 353,113);
  ctx.lineWidth = 4;
  ctx.strokeStyle = '#1ea08a';
  ctx.stroke();
  ctx.lineWidth = 1;
  //Загиб у шапки
  ctx.beginPath();
  ctx.moveTo(55,132);
  ctx.bezierCurveTo(165,70, 260,70, 355,113);
  ctx.lineTo(356,119);
  ctx.bezierCurveTo(260,80, 165,80, 54,138);
  ctx.closePath();
  ctx.fillStyle = '#ffe01d';
  ctx.fill();
  //Тень от пам-пам
  ctx.beginPath();
  ctx.moveTo(246,22);
  ctx.lineTo(242,29);
  ctx.lineTo(227,29);
  ctx.quadraticCurveTo(214,36, 202,27);
  ctx.lineTo(185,33);
  ctx.lineTo(185,23);
  ctx.quadraticCurveTo(177,31, 160,30);
  ctx.lineTo(157,25);
  ctx.strokeStyle = '#1ea08a';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.lineWidth = 1;
  //Пам-пам
  ctx.beginPath();
  ctx.moveTo(157,25);
  ctx.quadraticCurveTo(160,11, 176,13);
  ctx.quadraticCurveTo(186,4, 205,7);
  ctx.lineTo(208,3);
  ctx.quadraticCurveTo(220,3, 228,12);
  ctx.quadraticCurveTo(241,8, 246,22);
  ctx.lineTo(242,29);
  ctx.lineTo(227,29);
  ctx.quadraticCurveTo(214,36, 202,27);
  ctx.lineTo(185,33);
  ctx.lineTo(185,23);
  ctx.quadraticCurveTo(177,31, 160,30);
  ctx.closePath();
  ctx.fillStyle = '#ffe01d';
  ctx.fill();
}

function drawCartman(canvasName) {
  const canvas = document.getElementById(canvasName);
  const context = canvas.getContext('2d');
  drawCartmanLegs(context);
  drawCartmanJacket(context);
  drawCartmanWrists(context);
  drawCartmanFace(context);
  drawCartmanHat(context);  
}