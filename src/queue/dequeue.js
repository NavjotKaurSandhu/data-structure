class DeQueue {

    constructor() {
        this.items = {};
        this.count = 0;
        this.lowerCount = 0;
    }

    addFront(element) {

        // When there is not element in queue
        if (this.isEmpty()) {
            this.addBack(element);
        // when element is removed from the front of dequeue means lowercount is 1 or higher, we simply need to decrease lowercount property and assign element to that object key(position) 
        } else if (this.lowerCount > 0) {
            this.lowerCount--;
            this.items[this.lowerCount] = element;
        // When lowerCount is 0, we should assign key with negative value and update logic used to calculate size od dequeue to evaluate negative keys.
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i-1];
            }
            this.count++;
            this.lowerCount = 0;
            this.items[0] = element;
        }
    }

    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.count - this.lowerCount;
    }
}

const deque = new DeQueue();
console.log(deque.isEmpty());
deque.addBack('Jack');
deque.addFront('Jack 1');
deque.addBack('Jack 2');
console.log(deque);