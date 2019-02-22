class Stack {

    constructor() {
        this.items = {};
        this.count = 0;
    }

    push(element) {
        this.items[this.count] = element;
        this.count++;
    }

    isEmpty() {
        return this.count === 0;
    }

    size() {
        return this.count;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }

        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count-1];
    }

    clear() {
        this.items = {};
        this.count = 0;
    }

    // to print content of the stack similar to array
    toString() {

        if (this.isEmpty()) {
            return '';
        }

        let objString = `${this.items[0]}`;

        for(let i = 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`
        }

        return objString;
    }
}

const stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);
console.log(Object.getOwnPropertyNames(stack)); // {1}
console.log(Object.keys(stack)); // {2}
console.log(stack.items);  // {3}
console.log(stack.toString());