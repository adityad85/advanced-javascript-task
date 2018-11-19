const isEven = () => {
  // let count = 1;
  return (count) => {
    if(count % 2 === 0) {
      return {
        status: true,
        number: count,
      }
    }
    return {
      status: false,
      number: count,
    }
  };
};

module.exports = {
  isEven,
};