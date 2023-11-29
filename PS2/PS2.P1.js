// Generator function to generate all Fibonacci numbers
function* fibonacciGenerator() {
    let a = 0, b = 1;
    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
  }
  
  // Generator function to filter even Fibonacci numbers
  function* evenFibonacciGenerator() {
    const fibonacciGen = fibonacciGenerator();
    while (true) {
      let num = fibonacciGen.next().value;
      while (num % 2 !== 0) {
        num = fibonacciGen.next().value;
      }
      yield num;
    }
  }
  
  // Using the generators to print the first 6 even Fibonacci numbers
  const evenFibonacciGen = evenFibonacciGenerator();
  for (let i = 0; i < 6; i++) {
    console.log(evenFibonacciGen.next().value);
  }
  