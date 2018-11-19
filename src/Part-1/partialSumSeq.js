const partialSumSeq = (...args) => {
  let list = args;
  let tempValue = 0;
  let index = 0;
  return () => {
    if(index >= list.length) {
      throw new Error('the sequence is at it\'s end');
    }
    tempValue += list[index];
    index += 1;
    return tempValue;
  };
};

module.exports = {
  partialSumSeq,
};