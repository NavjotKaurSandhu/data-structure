// To prevent access of variables publically

// Symbol is new primitive type which is immutable and it can be used as object property.
const _items = Symbol('stackItems');

class Stack {

    constructor() {
        this[_items] = [];
    }

    push(element) {
        this[_items][this.count] = element;
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
        const result = this[_items][this.count];
        delete this[_items][this.count];
        return result;
    }
    
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this[_items][this.count-1];
    }
    
    clear() {
        this[_items] = {};
        this.count = 0;
    }
    
    // to print content of the stack similar to array
    toString() {
    
        if (this.isEmpty()) {
            return '';
        }
    
        let objString = `${this[_items][0]}`;
    
        for(let i = 1; i < this.count; i++) {
            objString = `${objString}, ${this[_items][i]}`
        }
    
        return objString;
    }
}

const stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);

let objectSymbols = Object.getOwnPropertySymbols(stack);
console.log(objectSymbols.length); // outputs 1
console.log(objectSymbols); // [Symbol()]
console.log(objectSymbols[0]); // Symbol()
console.log(stack[objectSymbols[0]]);