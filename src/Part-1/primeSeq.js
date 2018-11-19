const isPrime = (num) => {
  let i = 2;
  while(i <= Math.sqrt(num)) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
}

const primeSeq = () => {
  let number = 1;
  return () => {
    while(true) {
      number += 1;
      if(isPrime(number)) {
        return number;
      }
    }
  };
};

module.exports = {
  primeSeq,
};