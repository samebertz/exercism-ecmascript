'use strict';

class Bob {
  hey(m) {
    if (m.trim() == '') return 'Fine. Be that way!';
    var m = m.replace(/[^\Wa-zA-Z?!]/g,'');
    if ((m.search(/[a-zA-Z]/) > -1 || m[m.length-1] == '!') && m == m.toUpperCase()) return 'Whoa, chill out!';
    if (m[m.length-1] == '?') return 'Sure.';
    return 'Whatever.';
  }
}

export default Bob;
