const generators = (sequencer, ...args) => {
  this.sequence = sequencer(...args);
  return {
    next: () => {
      return this.sequence();
    }
  }
}

module.exports = {
  generators
};