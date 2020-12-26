Number.prototype.insideRange = function(x, y) {
  return (Math.min(x, y) <= this && this <= Math.max(x, y));
}

Number.prototype.outsideRange = function(x, y) {
  return !(Math.min(x, y) < this && this < Math.max(x, y));
}
