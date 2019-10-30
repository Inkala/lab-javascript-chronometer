// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = '';
}

Chronometer.prototype.startClick = function() {
  this.intervalId = setInterval(() => {
    this.currentTime++;
    this.setTime();
    printTime();
  }, 10);
};

Chronometer.prototype.setMinutes = function() {
  return Math.floor((this.currentTime / 6000));
};

Chronometer.prototype.setSeconds = function() {
  return Math.floor(this.currentTime / 100);
};

Chronometer.prototype.setMilliseconds = function() {
  return this.currentTime % 100;
};

Chronometer.prototype.twoDigitsNumber = function(num) {
  return num < 10 ? `0${num}` : num.toString();
};

Chronometer.prototype.setTime = function() {
  let minutes = this.twoDigitsNumber(this.setMinutes());
  let seconds = this.twoDigitsNumber(this.setSeconds());
  let mili = this.twoDigitsNumber(this.setMilliseconds());
  return `${minutes}:${seconds}:${mili}`;
};


Chronometer.prototype.stopClick = function() {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function() {
  this.currentTime = 0;
};

Chronometer.prototype.splitClick = function() {};
