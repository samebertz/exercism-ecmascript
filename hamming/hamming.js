'use strict';

//
class Hamming {
  compute(a, b) {
    if (a.length != b.length) throw new Error('DNA strands must be of equal length.');
    var d = 0;
    for(let i = 0; i < a.length; i++) {
      d += !!(a.charCodeAt(i) - b.charCodeAt(i));
    }
    return d;
  }
}

export default Hamming;
