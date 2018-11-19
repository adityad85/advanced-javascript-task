const fibonacciSeq = () => {
  let prev = 0;
  let nextToPrev = 1
  let count = 0;
  return () => {
    count += 1;
    if (count === 0) {
      return prev;
    } 
    if (count === 1) {
      return nextToPrev;
    } 
    let temp = nextToPrev;
    nextToPrev = prev + nextToPrev;
    prev = temp;
    return nextToPrev;
  }
};

module.exports = {
  fibonacciSeq,
};