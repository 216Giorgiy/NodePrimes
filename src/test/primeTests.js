var assert = require("assert");
var primes = require("../primes.js");

describe('Primes', function() {
    describe('when initially created with maxValue 100', function() {
        var maxValue = 100;
        var myPrimes = new primes.Primes(maxValue);
        it('should have max value 100', function() {
            assert.equal(maxValue, myPrimes.maxValue);
        });
        it('should have candidate list of size maxValue + 1', function() {
            assert.equal(maxValue+1, myPrimes.candidates.length);
        });
        it('should have 99 unknown candidates', function() {
            assert.equal(maxValue-1, myPrimes.countByState(CandidateStates.UNKNOWN))
        })
    });
    describe('when sieve is called on primes with maxValue 5', function() {
        var maxValue = 5;
        var myPrimes = new primes.Primes(maxValue);
        myPrimes.sieve();
        it('should find 3 primes', function() {
            assert.equal(3, myPrimes.countByState(CandidateStates.PRIME))
        })
        it('should find 1 non-primes', function() {
            assert.equal(1, myPrimes.countByState(CandidateStates.NOTPRIME))
        })
    })
    describe('when sieve is called on primes with maxValue 100', function() {
        var maxValue = 100;
        var myPrimes = new primes.Primes(maxValue);
        myPrimes.sieve();
        it('should find 25 primes', function() {
            assert.equal(25, myPrimes.countByState(CandidateStates.PRIME))
        })
        it('should find 74 non-primes', function() {
            assert.equal(74, myPrimes.countByState(CandidateStates.NOTPRIME))
        })
        it('should mark 97 as prime', function() {
            assert.equal(CandidateStates.PRIME, myPrimes.candidates[97].state);
        })
    })
});

describe('Candidate', function() {
    describe('when initially created with some n', function() {
        var n = 2;
        var candidate = new primes.Candidate(n);
        it('should have a value of n', function() {
            assert.equal(n, candidate.value);
        });
        it('should be in unknown state', function() {
            assert.equal(CandidateStates.UNKNOWN, candidate.state);
        });
    });
});
