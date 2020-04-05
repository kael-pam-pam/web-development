function isPrimeNumber(n) {
  let isPrime = true;
  
  if (Array.isArray(n)) {
    n.forEach((element) => isPrimeNumber(element));
  } else if (typeof(n) == 'number') {
    for (let i = 2; (i <= Math.sqrt(n)) && isPrime; i++) {
      if (n % i == 0) {
        isPrime = false;
      }
    }
    
    if (isPrime) {
      console.log(n + ' is prime number');
    } else {    
      console.log(n + ' is not prime number');
    }
  } else {
    console.log('Ошибка. Переданный параметр не является числом либо массивом, либо элемент массива не число');
  }
}