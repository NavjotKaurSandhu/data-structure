function LinkedList() {
    // Initialy we don't have any value added in LL that why our head and tail is null
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
    var newNode = new Node(value, this.head, null);

    // Already nodes in LL are there and we are adding one new node
    if (this.head) {
        this.head.prev = newNode;
    } else { // if LL is empty
        this.tail = newNode;
    }

    this.head = newNode;
};

LinkedList.prototype.addToTail = function(value) {
    var newNode = new Node(value, null, this.tail);

    if (this.tail) {
        this.tail.next = newNode;
    } else {
        this.head = newNode;
    }

    this.tail = newNode;
}

LinkedList.prototype.removeHead = function() {

    if (!this.head) {
        return null;
    }

    var val = this.head.value;
    this.head = this.head.next;

    if (this.head) {
        this.head.prev = null;
    } else {
        this.tail = null;
    }

    return val;
}

LinkedList.prototype.removeTail = function() {

    if (!this.tail) {
        return null;
    }

    var val = this.tail.value;
    this.tail = this.tail.prev; // Set prev node as current tail node

    // If tail is there then set its next val as null
    if ( this.tail) {
        this.tail.next = null;
    } else {
        this.head = null;
    }

    return val;
}

LinkedList.prototype.search = function(searchValue) {

    var currentNode = this.head;
    
    while(currentNode) {

        if (currentNode.value === searchValue) {
            return currentNode.value;
        }

        currentNode = currentNode.next;
    }
    return null;
}

LinkedList.prototype.indexOf = function(value) {

    var indexes = [];
    var currentIndex = 0;
    var currentNode = this.head;
    
    while(currentNode) {

        if (currentNode.value === value) {
            indexes.push(currentIndex);
        }

        currentNode = currentNode.next;
        currentIndex++;
    }

    return indexes;
}

var ll = new LinkedList();
ll.addToHead(300);
ll.addToHead(500);
// ll.addToTail(300);
// ll.addToTail(200);
// ll.addToTail(300);

console.log(ll);
// console.log(ll.indexOf(300));