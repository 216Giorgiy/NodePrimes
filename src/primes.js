CandidateStates = Object.freeze({UNKNOWN:0, NOTPRIME: 1, PRIME: 2});

function Candidate(n) {
    this.value = n;
    this.state = CandidateStates.UNKNOWN;
}
function Primes(maxValue) {
    this.candidates = [];
    this.maxValue = maxValue;
    for(var i=0;i<=this.maxValue;i++){
        if(i<2){
            this.candidates[i] = null;
        }
        else {
            this.candidates[i] = new Candidate(i);
        }
    }
}

Primes.prototype.sieve = function() {
    function getFirstElementWithState(list, state) {
        var index=-1;
        for(var i=2;i<list.length;i++)
        {
            if(list[i].state === state) {
                index = i;
                break;
            }
        }
        return index;
    }

    // make first unknown value PRIME
    var firstUnknownIndex = getFirstElementWithState(this.candidates, CandidateStates.UNKNOWN);
    var foundPrime = 0;
    while(firstUnknownIndex <= Math.sqrt(this.maxValue)) {
        if (firstUnknownIndex > 0) {
            this.candidates[firstUnknownIndex].state = CandidateStates.PRIME;
            foundPrime = this.candidates[firstUnknownIndex].value;
        }
        // iterate over candidates incrementing by foundPrime and mark NotPrime
        for (var i = firstUnknownIndex + foundPrime; i < this.candidates.length; i += foundPrime) {
            this.candidates[i].state = CandidateStates.NOTPRIME;
        }
        firstUnknownIndex = getFirstElementWithState(this.candidates, CandidateStates.UNKNOWN);
    }
    // mark remaining unknowns as prime
    for(var i=firstUnknownIndex;i<this.candidates.length;i++)
    {
        if(this.candidates[i].state===CandidateStates.UNKNOWN) {
            this.candidates[i].state = CandidateStates.PRIME;
        }
    }
}

Primes.prototype.countByState = function(state) {
    var count = 0;
    for(var i=2;i<this.candidates.length;i++) {
        if(this.candidates[i].state === state) {
            count++;
        }
    }
    return count;
}


module.exports.Candidate = Candidate;
module.exports.Primes = Primes;