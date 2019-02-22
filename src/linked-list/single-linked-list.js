function defaultEquals(a, b) {
    return a === b;
}

class Node {
    constructor(element) {
        this.element = element;
        this.next = undefined;
    }
}

class SingleLinkedList {

    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    // Insert element at last of list
    push(item) {

        const newNode = new Node(item);
        let current;

        // Linked List is empty
        if (this.head == null) {
            this.head = newNode;
        // Linked List is not empty, adding element at end of list when it is not empty
        } else {
            current = this.head;
            while(current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }

        this.count++;
    }

    // Remove element from any position from list
    removeAt(index) {

        // check for out-of-bounds values
        if (index >= 0 && index < this.count) {

            let current = this.head;

            // removing first element
            if (index === 0) {
                this.head = current.next; // overwrite the head with next;
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                //link previous node with current next node : skip it to remove
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }

        return undefined;
    }

    // Get element at specific position where index in loop will 1 less then provided index eg: 2 -> 1
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

    // Insert element at specific position in linked list
    insert(element, index) {

        if (index >= 0 && index < this.count) {
            const newNode = new Node(element);
         
            if (index === 0) {
                const current = this.head;
                newNode.next = current;
                this.head = newNode
            } else {
                const previous = this.getElementAt(index - 1);
                const current = previous.next;
                newNode.next = current;
                previous.next = newNode;
            }
            this.count++;
            return true;
        }

        return false;
    }

    insertAt(element, index) {

        if (index >= 0 && index < this.count) {

            const newNode = new Node(element);

            if (index === 0) {

            } else {
                let current = list.head;
                for(let i = 1; i < index; i++) {
                    current = current.next;
                }
                newNode.next = current.next;
                current.next = newNode;
            }
            this.count++;
            return true;
        }

        return false;
    }

    // find index of element in linked list
    indexOf(element) {
        
        let current = this.head;
        for(let i = 0; i < this.count && current != null; i++) {
            if(this.equalsFn(element, current.element)) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }

    // Removing element from the linked list based on element value instead of index
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    // Get the size of linked list
    size() {
        return this.count;
    }

    // check whether linked list is empty or not
    isEmpty() {
        return this.size() === 0;
    }

    // Get the head of linked list
    getHead() {
        return this.head;
    }

    // Convert linked list into string
    toString() {
        if(this.head == null) {
            return '';
        }
        let objStr = `${this.head.element}`;
        let current = this.head.next;

        for(let i = 1; i < this.size() && current != null; i++) {
            objStr = `${objStr}, ${current.element}`;
            current = current.next;
        }

        return objStr;
    }

}

const list = new SingleLinkedList();
list.push('N1');
list.push('N2');
list.push('N3');
list.push('N4');
console.log(list.insertAt('N5', 2));
// console.log(list);
// console.log(list.toString());
// console.log(list);
// console.log(list.removeAt(3));
let current = list.head;
for(let i = 0; i < list.count-1; i++) {
    current = current.next;
    console.log('head list => ', current);
}
