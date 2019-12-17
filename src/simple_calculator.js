function add() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum =sum + arguments[i];
  }
  return sum;
}

function multiply() {
  let result = 1;

  for (let j = 0; j < arguments.length; j++) {
    result = result * arguments[j];
  }

  return result;
}
module.exports = {
  add,
  multiply
};
