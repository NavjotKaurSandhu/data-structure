class Queue {

    constructor() {
        this.count = 0;
        this.lowerCount = 0; // to track element from first place
        this.items = {};
    }

    // Add element to end of queue
    enQueue(element) {
        this.items[this.count] = element;
        this.count++;
    }

    deQueue() {

        if (this.isEmpty()) {
            return undefined;
        }

        const result = this.items[this.lowerCount];
        delete this.items[this.lowerCount];
        this.lowerCount++;
        return result;
    }

    isEmpty() {
        return this.size() === 0;
        // return this.count - this.lowerCount === 0;
    }

    size() {
        return this.count - this.lowerCount;
    }

    peek() {

        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.lowerCount];
    }

    clear() {
        this.count = 0;
        this.lowerCount = 0;
        this.items = {};
    }

    toString() {

        if (this.isEmpty()) {
            return '';
        }

        let objString = `${this.items[this.lowerCount]}`;
        for (let i = this.lowerCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`
        }

        return objString;

    }
}

let queue = new Queue();
// console.log(queue.isEmpty());
queue.enQueue('John');
queue.enQueue('Jack');
// console.log(queue);
// console.log(queue.toString());
queue.enQueue('Camila');
// console.log(queue.size());
queue.deQueue();
queue.deQueue();
