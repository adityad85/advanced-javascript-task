const rangeSeq = (start, step) => {
  let tempStart = start;
  let stepMemo = step;
  return () => {
    let tempValue = tempStart;
    tempStart += stepMemo;
    return tempValue;
  }
};

module.exports = {
  rangeSeq,
};
