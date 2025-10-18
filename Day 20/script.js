class Calculator {
  constructor(initialValue = 0) {
    this.value = initialValue;
  }

  add(num) {
    this.value += num;
    return this; // Crucial for chaining
  }

  subtract(num) {
    this.value -= num;
    return this; // Crucial for chaining
  }

  multiply(num) {
    this.value *= num;
    return this; // Crucial for chaining
  }

  getResult() {
    return this.value;
  }
}

const calc = new Calculator(10);

// Chaining methods
const finalResult = calc.add(5).subtract(2).multiply(3).getResult();

console.log(finalResult); // Output: 39 ( (10 + 5 - 2) * 3 )