import { expect } from 'chai';
import FizzBuzz from './main';

describe('FizzBuzz', () => {

  it('should return `Fizz` when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
  });

  it('should return `Buzz` when miltiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
  });

  it('should return `FizzBuzz` when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it('should return number when its not multiple', () => {
    expect(FizzBuzz(7)).to.be.equal(7);
  });

  it('should return number when is 0', () => {
    expect(FizzBuzz(0)).to.be.equal(0);
  });
});