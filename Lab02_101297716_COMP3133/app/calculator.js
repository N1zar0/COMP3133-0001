// calculator.js

module.exports = {
	add: (a, b) => {
	  const result = a + b;
	  console.log(`add(${a}, ${b}) expected result ${result} ${result === 7 ? 'PASS' : 'FAIL'}`);
	  return result;
	},
	sub: (a, b) => {
	  const result = a - b;
	  console.log(`sub(${a}, ${b}) expected result ${result} ${result === 3 ? 'PASS' : 'FAIL'}`);
	  return result;
	},
	mul: (a, b) => {
	  const result = a * b;
	  console.log(`mul(${a}, ${b}) expected result ${result} ${result === 10 ? 'PASS' : 'FAIL'}`);
	  return result;
	},
	div: (a, b) => {
	  const result = a / b;
	  console.log(`div(${a}, ${b}) expected result ${result} ${result === 5 ? 'PASS' : 'FAIL'}`);
	  return result;
	},
  };
  