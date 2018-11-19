const { generators } = require('./generator');
const { factorialSeq } = require('./factorialSeq'); 
const { fibonacciSeq } = require('./fibonacciSeq'); 
const { primeSeq } = require('./primeSeq');
const { rangeSeq } = require('./rangeSeq');
const { partialSumSeq } = require('./partialSumSeq');

const dummySeq = () => {
  return () => {
    return 'dummy';
  }
}

const data = generators(fibonacciSeq);
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());