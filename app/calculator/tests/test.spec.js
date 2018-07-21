import { expect } from 'chai';
import { sum, sub, mult, div } from '../main';

describe('Calculator', () => {

  // smoke tests => basic tests
  describe('Smoke tests', () => {

    it('should have a method `sum`', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should have a method `sub`', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('should have a method `mult`', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });

    it('should have a method `div`', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });

  });

  describe('Sum operation', () => {
    it('should return 4 when `sum(2, 2)`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub operation', () => {
    it('should return 15 when `sub(5, 10)`', () => {
      expect(sub(5, 20)).to.be.equal(-15);
    });
  });

  describe('Mult operation', () => {
    it('should return 6 when `mult(3, 2)`', () => {
      expect(mult(3, 2)).to.be.equal(6);
    })
  });

  describe('Division operation', () => {
    it('should return 25 when `div(50, 2)`', () => {
      expect(div(50, 2)).to.be.equal(25);
    });

    it('should return `It is not possible divide number by 0` when divide by 0', () => {
      expect(div(4, 0)).to.be.equal('It is not possible divide number by 0');
    });
  });
});