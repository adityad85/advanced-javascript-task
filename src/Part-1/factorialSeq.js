const factorialSeq = () => {
  let start = 0;
  let prevFact = 1; 
  return () => {
    if(start !== 0)
    prevFact = start * prevFact;
    start += 1;
    return prevFact;
  };
};

module.exports = {
  factorialSeq,
};