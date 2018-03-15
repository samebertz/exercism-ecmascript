class Words {
  count(str) {
    var counts = {};
    str.toLowerCase().trim().split(/\s+/).forEach((e) => {
     counts[e] = counts.hasOwnProperty(e) ? counts[e]+1 : 1;
    });
    return counts;
  }
}

export default Words;
