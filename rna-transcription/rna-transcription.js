'use strict';

class Transcriptor {
  toRna(dna) {
    const bases = 'ACTG';
    const dict = new Map([['A','U'],['C','G'],['T','A'],['G','C']]);
    return dna.split('').map((c, i, a) => {
      if (bases.includes(c)) return dict.get(c);
      throw new Error('Invalid input DNA.');
      // return bases.includes(c) ? dict.get(c) : (() => {throw new Error('Invalid input DNA.');})();
    }).join('');
  }
}

export default Transcriptor;
