var assert = require("assert");
var primes = require("../primes.js");

describe('Primes', function() {
    describe('when initially created with size 100', function() {
        var myPrimes = new primes.Primes(100);
        it('should have max size 100', function() {
            assert.equal(100, myPrimes.maxSize);
        });
        it('should have candidate list of size 100', function() {
            assert.equal(100, myPrimes.candidates.length);
        });
    });
});

describe('Candidate', function() {
    describe('when initially created with some n', function() {
        var n = 2;
        var candidate = new primes.Candidate(n);
        it('should have a value of n', function() {
            assert.equal(n, candidate.value);
        });
        it('should not be prime', function() {
            assert.equal(false, candidate.isPrime);
        });
    });
});
