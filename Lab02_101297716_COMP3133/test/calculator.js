const chai = require('chai');
const assert = chai.assert;
const calculator = require('../calculator');

describe('Calculator Tests', () => {
  it('should add two numbers correctly', () => {
    assert.equal(calculator.add(5, 2), 7);
  });

  it('should subtract two numbers correctly', () => {
    assert.equal(calculator.sub(5, 2), 3);
  });

  it('should multiply two numbers correctly', () => {
    assert.equal(calculator.mul(5, 2), 10);
  });

  it('should divide two numbers correctly', () => {
    assert.equal(calculator.div(10, 2), 5);
  });

  it('should fail to add two numbers correctly', () => {
    assert.equal(calculator.add(5, 2), 8);
  });

  it('should fail to subtract two numbers correctly', () => {
    assert.equal(calculator.sub(5, 2), 5);
  });

  it('should fail to multiply two numbers correctly', () => {
    assert.equal(calculator.mul(5, 2), 12);
  });

  it('should fail to divide two numbers correctly', () => {
    assert.equal(calculator.div(10, 2), 2);
  });
});
