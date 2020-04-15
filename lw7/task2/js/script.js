
function calc(s) {
  let setOperations = new Set(['+','-','/','*']);
  let arrayData = [];
  let isReadyPrint = false;
  let operation = '';
  let number = '';
  let digit = '';
  let bracket = '';
  let bracketСount = 0;
  let operationСount = 0;
  let numberCount = 0;
  let fraction = '';
  let isFraction = false;

  function setOperation(ch) {
    //операция
    if (!setOperations.has(ch)) {
      return false;
    }
    operation = ch;
    isReadyPrint = true;
    return true;
  }

  function setNumber(ch) {
    //число
    if ((ch === '.') && (number !== '') && (!isFraction)) {
      isReadyPrint = false;
      isFraction = true;
      return true;
    }
    digit = parseInt(ch);
    if (isNaN(digit)) {
      return false;
    }
    if (isFraction) {
      fraction += digit; 
    } else {
      number = (number * 10) + digit;
    }
    isReadyPrint = false;
    return true;
  }

  function setBracket(ch) {
    if ((ch !== '(') && (ch !== ')') && (ch !== ' ')) {
      return false;
    }
    //скобка/пробел
    if ((ch === '(') || (ch === ')')) {
      bracket = ch;
    }
    isReadyPrint = true;
    return true;
  }

  function saveNumber() {
    //сохранение числа
    if (number === '') {
      return;
    }
    if ((isFraction) && (fraction === '')) {
      return;
    }
    if (isFraction) {
      number = Number(number + '.' + fraction);
    }
    arrayData.push({ value: number, type: 'NUM' });
    number = '';
    fraction = '';
    isFraction = false;
    numberCount++;
  }

  function saveOperation() {
    //сохранение операции
    if (operation === '') {
      return;
    }
    arrayData.push({ value: operation, type: 'OP' });
    operation = '';
    operationСount++;
  }

  function saveBracket() {
    //сохранение скобки
    if (bracket === '') {
      return;
    }
    if (bracket === '(') {
      arrayData.push({ value: bracket, type: 'OP_BR' });
      bracketСount++;
    }
    if (bracket === ')') {
      arrayData.push({ value: bracket, type: 'CL_BR' });
      bracketСount--;
    }
    bracket = '';    
  }
  
  //проверка на тип == строка
  if (typeof(s) !== 'string') {
    console.log('Ошибка. Параметр должен быть строкой.');
    return;
  }
  
  //перебор строки
  for (i = 0; i < s.length; i++) {  
    if (!((setOperation(s[i])) || (setNumber(s[i])) || (setBracket(s[i])))) {
      //мусор
      console.log('Ошибка. Неправильный синтаксис.');
      return;
    }    
    //заполнение массива данных
    if (isReadyPrint) {
      saveNumber();
      saveOperation();
      saveBracket();
      isReadyPrint = false;
    }
  }
  //печать числа при окончании прохода по строке (если не успели распечатать)
  saveNumber();
  
  //ошибки
  if (bracketСount !== 0) {
    console.log('Ошибка. Не хватает скобки.');
    return;
  }
  if ((numberCount - operationСount) !== 1) {
    console.log('Ошибка. Не хватает оператора/операнда.');
    return;
  }
  
  subCalc(arrayData);
  return;
}

function subCalc(inpArrObj) {
  let operation = new Object();
  let number1 = new Object();
  let number2 = new Object();
  let status = 0;  // "-" - копирование остатка; 0 - готов к считыванию операции; 1 - считана операция; 2 - считано первое число
  let outArrObj = [];
  let beenOpBr = false;
  let checkClBr = false;
  
  function logicOperation(elemObj) {
    //работа с операцией
    if (elemObj.type !== 'OP') {
      return false;
    }
    if (status === 0) {
      operation = elemObj;
      status = 1;
      return true;
    }
    if (status === 1) {
      if (beenOpBr) { 
        outArrObj.push({ value: '(', type: 'OP_BR' }); 
        beenOpBr = false; 
      }
      outArrObj.push(operation);
      operation = elemObj;
    }
    if (status === 2) {
      if (beenOpBr) { 
        outArrObj.push({ value: '(', type: 'OP_BR' }); 
        beenOpBr = false; 
      }
      outArrObj.push(operation);
      outArrObj.push(number1);
      operation = elemObj;
      status = 1;
    } 
    return true;
  }
  
  function logicNumber(elemObj) {
    //работа с числом
    if (elemObj.type !== 'NUM') {
      return true;
    }
    if (status === 0) {
      console.log('Ошибка. Нарушен порядок.');
      return false;
    }
    if (status === 1) {
      number1 = elemObj;
      status = 2;
      return true;
    }
    if (status === 2) {
      number2 = elemObj;
      status = '-';
      if (operation.value === '+') {
        outArrObj.push({ value: number1.value + number2.value, type: 'NUM' });
      }
      if (operation.value === '-') {
        outArrObj.push({ value: number1.value - number2.value, type: 'NUM' });
      }
      if (operation.value === '*') {
        outArrObj.push({ value: number1.value * number2.value, type: 'NUM' });
      }
      if (operation.value === '/') {
        if (number2.value === 0) {
          console.log('Ошибка. Деление на 0.');
          return false;
        }
        outArrObj.push({ value: number1.value / number2.value, type: 'NUM' });
      }
      if (beenOpBr) {
        checkClBr = true;
      }
    }
    return true;
  }
  
  function logicBracket(elemObj) {
    if (elemObj.type !== 'OP_BR') {
      return;
    }
    if (status === 1) {
      if (beenOpBr) { 
        outArrObj.push(elemObj);
      }
      outArrObj.push(operation);
    }
    if (status === 2) {
      if (beenOpBr) { 
        outArrObj.push(elemObj);
      }
      outArrObj.push(operation);
      outArrObj.push(number1);
    }
    status = 0;
    beenOpBr = true;
  }
  
  function copyTail(elemObj) {
    //копирование остатка
    if (status !== '-') {
      return false;
    }
    if ((checkClBr) && (elemObj.type === 'CL_BR')) {
      checkClBr = false;
      return true;
    }
    checkClBr = false;
    outArrObj.push(elemObj);
    return true;
  }
  
  //осталось 1 число - это ответ
  if (inpArrObj.length == 1) {
    console.log(inpArrObj[0].value);
    return;
  }
  
  //перебор массива
  for (let i = 0; i < inpArrObj.length; i++) {     
    if (copyTail(inpArrObj[i])) {
      continue;
    }
    logicBracket(inpArrObj[i]);
    if (logicOperation(inpArrObj[i])) {
      continue;
    }
    if (!(logicNumber(inpArrObj[i]))) {
      return;
    }
  } //перебор массива
  subCalc(outArrObj);
}
