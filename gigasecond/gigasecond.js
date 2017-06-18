'use strict';

class Gigasecond {
  constructor(date) {
    this.startDate = date;
  }
  date() {
    return new Date(this.startDate.getTime() + 10**12);
  }
}

export default Gigasecond;
