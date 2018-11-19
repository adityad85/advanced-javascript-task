const { pipeSeq } = require('./pipeSeq');
const { fibonacciSeq } = require('../Part-1/fibonacciSeq');
const { generators } = require('../Part-1/generator');
const { factorialSeq } = require('../Part-1/factorialSeq');
const { rangeSeq } = require('../Part-1/rangeSeq'); 
const { isEven } = require('../Part-2/isEven');

const accumulator = () => {
  let sum = 0;
  return (value) => {
    sum += value;
    return sum;
  };
}

const data = pipeSeq(rangeSeq, 2, 3).pipeline(accumulator).pipeline(isEven).invoke();
const data2 = generators(data);
console.log(data2.next());
console.log(data2.next());
console.log(data2.next());
console.log(data2.next());
console.log(data2.next());

