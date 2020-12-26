Number.prototype.insideRange = function(min, max) {
  return (min <= this && this <= max);
}

Number.prototype.outsideRange = function(min, max) {
  return !(min < this && this < max);
}
