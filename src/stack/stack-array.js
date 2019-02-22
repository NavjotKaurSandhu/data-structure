class Stack {

    constructor() {
        this.items = [];
        this.reverseList = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }
    
    peek() {
        return this.items[this.items.length-1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }

    reverse() {
        
        if (this.isEmpty()) return;
        let temp = this.pop();
        this.reverseList.push(temp);
        this.reverse();
        // return [].concat(arr.pop(),reverse(arr));
        return this.reverseList;
    }
}

const stack = new Stack();
// console.log(stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push(30);
// console.log(stack.items);
// console.log(stack.peek());
// console.log(stack.size());
// stack.pop();
console.log(stack);
console.log(stack.reverse());