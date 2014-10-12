FixedLengthArray = (function (proto) {
  function FixedLengthArray (maxLength) {
    this.maxLength = maxLength;
  };
  FixedLengthArray.prototype = Object.create(proto);

  FixedLengthArray.prototype.push = function () {
    proto.push.apply(this, arguments);
    while (this.length > this.maxLength) {
      this.shift();
    };
  };

  FixedLengthArray.prototype.unshift = function () {
    proto.unshift.apply(this, arguments);
    while (this.length > this.maxLength) {
      this.pop();
    }
  }

  return FixedLengthArray;
})(Array.prototype);

var twoValueArray = new FixedLengthArray(2);
twoValueArray.push(1,2,3);
twoValueArray