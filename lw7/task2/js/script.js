
function subCalc(inpArrObj) {
  let operation = new Object();
  let number1 = new Object();
  let number2 = new Object();
  let status = 0;  // "-" - копирование остатка; 0 - готов к считыванию операции; 1 - считана операция; 2 - считано первое число
  let outArrObj = [];
  let beenOpBr = false;
  let checkClBr = false;
  
  //осталось 1 число - это ответ
  if (inpArrObj.length == 1) {
    console.log(inpArrObj[0].value);
    return;
  }
  
  //перебор массива
  for (let i = 0; i < inpArrObj.length; i++) {    
    
    //копирование остатка
    if (status === '-') {
      if ((checkClBr) && (inpArrObj[i].type === 'CL_BR')) {
        checkClBr = false;
        continue;
      }
      checkClBr = false;
      outArrObj.push(inpArrObj[i]);
      continue;
    }
    
    if (inpArrObj[i].type === 'OP_BR') {
      if (status === 1) {
        if (beenOpBr) { 
          outArrObj.push(inpArrObj[i]);
        }
        outArrObj.push(operation);
      }
      if (status === 2) {
        if (beenOpBr) { 
          outArrObj.push(inpArrObj[i]);
        }
        outArrObj.push(operation);
        outArrObj.push(number1);
      }
      status = 0;
      beenOpBr = true;
    }
    
    //работа с операцией
    if (inpArrObj[i].type === 'OP') {
      if (status === 0) {
        operation = inpArrObj[i];
        status = 1;
        continue;
      }
      if (status === 1) {
        if (beenOpBr) { 
          outArrObj.push({ value: '(', type: 'OP_BR' }); 
          beenOpBr = false; 
        }
        outArrObj.push(operation);
        operation = inpArrObj[i];
        continue;
      }
      if (status === 2) {
        if (beenOpBr) { 
          outArrObj.push({ value: '(', type: 'OP_BR' }); 
          beenOpBr = false; 
        }
        outArrObj.push(operation);
        outArrObj.push(number1);
        operation = inpArrObj[i];
        status = 1;
        continue;
      } 
    } //OP

    //работа с числом
    if (inpArrObj[i].type === 'NUM') {
      if (status === 0) {
        console.log('Ошибка. Нарушен порядок.');
        return;
      }
      if (status === 1) {
        number1 = inpArrObj[i];
        status = 2;
        continue;
      }
      if (status === 2) {
        number2 = inpArrObj[i];
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
          if (number2 == 0) {
            console.log('Ошибка. Деление на 0.');
            return;
          }
          outArrObj.push({ value: number1.value / number2.value, type: 'NUM' });
        }
        if (beenOpBr) {
          checkClBr = true;
        }
        continue;
      }
    } //NUM     
  } //перебор массива

  subCalc(outArrObj);
}

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
  
  //проверка на тип == строка
  if (typeof(s) !== 'string') {
    console.log('Ошибка. Параметр должен быть строкой.');
    return;
  }
  
  //перебор строки
  for (i = 0; i < s.length; i++) {  
   
    if (setOperations.has(s[i])) {
      //операция
      operation = s[i];
      isReadyPrint = true;
    } else {
      //число
      digit = parseInt(s[i]);
      if (!isNaN(digit)) {
        number = (number * 10) + digit;
        isReadyPrint = false;
      } else {
        if ((s[i] === '(') || (s[i] === ')') || (s[i] === ' ')) {
          //скобка/пробел
          if ((s[i] == '(') || (s[i] == ')')) {
            bracket = s[i];
          }
          isReadyPrint = true;
        } else {
          //мусор
          console.log('Ошибка. Неправильный синтаксис.');
          return;
        }
      }
    }
    
    //заполнение массива данных
    if (isReadyPrint) {
      //сохранение числа
      if (number !== '') {
        arrayData.push({ value: number, type: 'NUM' });
        number = '';
        numberCount++;
      }
      //сохранение операции
      if (operation !== '') {
        arrayData.push({ value: operation, type: 'OP' });
        operation = '';
        operationСount++;
      }
      if (bracket !== '') {
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
      isReadyPrint = false;
    }
    
  }
  
  //печать числа при окончании прохода по строке (если не успели распечатать)
  if (number !== '') {
    arrayData.push({ value: number, type: 'NUM' });
    number = '';
    numberCount++;
  }
  
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