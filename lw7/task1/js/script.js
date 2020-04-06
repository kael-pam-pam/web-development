function isPrimeNumber(n) {
  let isPrime = true;
  
  if (Array.isArray(n)) {
    n.forEach((element) => isPrimeNumber(element));
    return;
  }
  
  if (typeof(n) == 'number') {
    if (n < 2) {
      isPrime = false;
    }
    
    for (let i = 2; isPrime && i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        isPrime = false;
      }
    }
    
    if (isPrime) {
      console.log(n + ' is prime number');
    } else {    
      console.log(n + ' is not prime number');
    }
    return;
  } 
  
  console.log('Ошибка. Переданный параметр "' + n + 
              '" не является числом либо массивом, либо элемент массива не число');
}