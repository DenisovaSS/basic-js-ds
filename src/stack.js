const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = [];
    this.size = 0;
  }
  push(element) {
    this.stack[this.size] = element;
    this.size++;
  }

  pop() {
    let removed = this.stack[this.size - 1];
    delete this.stack[this.size - 1];
    this.size--;
    return removed;
  }

  peek() {
    return this.stack[this.size - 1];
  }
}
const stack = new Stack();
stack.push(5);
stack.push(6);
stack.push(8);
console.log(stack);
console.log(stack.peek());
console.log(stack.pop());
stack.push(7);
console.log(stack);
module.exports = {
  Stack,
};
