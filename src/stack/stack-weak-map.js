// As we can see from the preceding code, it is possible to retrieve the _items symbol by accessing stack[objectSymbols[0]]. And, as the _items property is an array, we can do any array operation such as removing or adding an element to the middle of the array

const items = new WeakMap();

class Stack {

    constructor() {

        items.set(this, []);

    }

    push(element) {
        const s = items.get(this);
        s.push(element);
    }

    pop() {
        const s = items.get(this);
        const r = s.pop();
        return r;
    }

}