function Box(value) {
    this.value = value;
  }
  Box.prototype.getValue = function () {
    return this.value;
  };
  const box = new Box(1);
  const box2 = new Box(4);
  
  // Mutate Box.prototype after an instance has already been created
  Box.prototype.getValue = function () {
    return this.value * 12;
  };
  box.__proto__.getValue = function () {
    return this.value * 120;
  };
  console.log(box.getValue()); // 2
  console.log(box2.getValue()); // 2
  