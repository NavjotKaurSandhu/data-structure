function defaultEquals(a, b) {
    return a === b;
}

class Node {
    constructor(element) {
        this.element = element;
        this.next = undefined;
        this.prev = undefined;
    }
}

class DoubleLinkedList {

    constructor(equalFn = defaultEquals) {
        this.equalFn = equalFn;
        this.tail = undefined
        this.head = undefined;
        this.count = 0;
    }

    insert(element, index) {

        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element);
            let current = this.head;
            // Insert element at index 0
            if (index === 0) {
                // Linked list is empty
                if (this.head == null) { // {1} NEW
                    this.head = node;
                    this.tail = node;
                // Linked list is not empty
                } else {
                    node.next = this.head; // {2}
                    current.prev = node; // {3} NEW
                    this.head = node; // {4}
                }
            // Insert element at last position
            } else if (index === this.count) { // last item NEW
                current = this.tail; // {5}
                current.next = node; // {6}
                node.prev = current; // {7}
                this.tail = node; // {8}
            // Inserting element at middle of list
            } else {
                const previous = this.getElementAt(index - 1); // {9}
                current = previous.next; // {10}
                node.next = current; // {11}
                previous.next = node; // {12}
                current.prev = node; // {13} NEW
                node.prev = previous; // {14} NEW
            }
            this.count++;
            return true;
        }
        return false;
    }

    getElementAt(index) {

        if(index >= 0 && index < this.count) {
            let current = this.head;
            for(let i = 0; i < index; i++) {
                current = current.next;
            }
            return current;
        }

        return undefined;
    }

    removeAt(index) {

        if (index >= 0 && index < this.count) {

            let current = this.head;

            // If index is 0 i.e want to delete first element from linked list
            if (index === 0) {
                this.head = current.next;
                // Only one element is there in linked list
                if (this.count === 1) {
                    this.tail = undefined;
                // there are mutliple elements in linked list
                } else {
                    this.head.prev = undefined;
                }
            // If index is equal to count means want to delete last element from linked list
            } else if (index === this.count - 1) {
                current = this.tail;
                this.tail = current.prev;
                this.count.tail.next = undefined;
            } else {
                current = getElementAt(index);
                let previous = current.prev;
                previous.next = current.next;
                current.next.prev = previous; 
            }
            this.count--;
            return current.element;
        }

        return undefined;
    }

}