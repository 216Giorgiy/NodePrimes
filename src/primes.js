function Candidate(n) {
    this.value = n;
    this.isPrime = false;
}
function Primes(maxSize) {
    this.candidates = [];
    this.maxSize = maxSize;
    for(var i=0;i<this.maxSize;i++){
        this.candidates[i]= new Candidate(i+1);
    }
}

Primes.prototype.sieve = function() {

}

module.exports.Candidate = Candidate;
module.exports.Primes = Primes;