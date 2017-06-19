'use strict';

class PerfectNumbers {
  factor(n) {
    var a = [];
    for (var i = 1; i <= n/2; i++) {
      if ( n % i == 0 ) a.push(i);
    }
    return a;
  }
  classify(n) {
    if ( n < 1 || !Number.isInteger(n) ) {
      throw 'Classification is only possible for natural numbers.'
    } else {
      let factors = this.factor(n);
      let sum = factors.reduce((i, j) => i + j , 0);
      
      switch (true) {
        case sum > n:
          return 'abundant';
        case sum < n:
          return 'deficient';
        default:
          return 'perfect';
      }
    }
  }
}

export default PerfectNumbers;
