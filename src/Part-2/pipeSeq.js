const pipeSeq = (sequencer, ...args) => {
  let sequenceFunction = sequencer(...args);
  let pipe = [];
  return {
    pipeline: function (functionPassed) {
      pipe.push(functionPassed());
      return this;
    },
    invoke: () => () => () => {
      return pipe.reduce((value, pipeFunction) => pipeFunction(value), sequenceFunction());
    }
  }
};

module.exports = {
  pipeSeq,
};