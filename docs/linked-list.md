
## Linked List :

1. It is a list of elements called nodes that are connected together or linked together in a single line.
2. Real time examples of Linked List :
   * The first example is a conga line. Each person is an element, and the hands would be the pointer that links to the next person in the conga line. You can add people to the line—you just need to find the spot where you want to add the person, decouple the connection, then insert the new person and make the connection again.
   * Another example would be a scavenger hunt. You have a clue, and this clue is the pointer to the place where you can find the next clue. With this link, you go to the next place and get another clue that will lead to the next one. The only way to get a clue from the middle of the list is to follow the list from the beginning (from the first clue).
   * A train consists of a series of vehicles (also known as wagons). Each vehicle or wagon is linked to each other. You can easily decouple a wagon, change its place, or add or remove it.
3. Implementation of Linked List :

    ```
    LinkedList = {
        head: points to head of LL,
        tail: points to tail of LL
    }
    Node = {
        value: 7,
        next: nextNode,
        prev: prevNode
    }
    ```
4. Different types of Linked List:
   * Singly linked list : 
      - Each node only has reference to the node after it or the next node.
      - Methods of Single Linked List:
         * push(element): This method adds a new element to the end of the list.
         * insert(element, position): This method inserts a new element at a specified position in the list.
         * getElementAt(index): This method returns the element of a specific position in the list. If the element does not exist in the list, it returns undefined.
         * remove(element): This method removes an element from the list.
         * indexOf(element): This method returns the index of the element in the list. If the element does not exist in the list, it returns -1.
         * removeAt(position): This method removes an item from a specified position in the list.
         * isEmpty(): This method returns true if the linked list does not contain any elements, and false if the size of the linked list is bigger than 0.
         * size(): This method returns the number of elements the linked list contains. It is similar to the length property of the array.
         * toString(): This method returns a string representation of the linked list. As the list uses a Node class as an element, we need to overwrite the default toString method inherited from the JavaScript Object class to output only the element values.

   [`Single Linked List`](../src/linked-list/single-linked-list.js) 

   * Double linked list : 
      - Each node has a reference to the next node but it also has a reference to the one before it as well or the previous node.

   [`Double Linked List`](../src/linked-list/doubly-linked-list.js) 

   * Circular linked list : 
      - A circular linked list can have only one reference direction (as with a linked list) or a double reference (as with a doubly linked list). The only difference between a circular linked list and a linked list is that the last element's next (tail.next) pointer does not make a reference to undefined, but to the first element (head).

   [`Circular Linked List`](../src/linked-list/circular-linked-list.js) 

   * Doubly linked list : 
      - A doubly circular linked list has tail.next pointing to the head element, and head.prev pointing to the tail element.

   * Sorted linked list : 
      - A sorted linked list is a list that keeps its elements sorted. 
      - To keep all elements sorted, instead of applying a sorting algorithm, we will insert the element at its correct position so as to keep the list always sorted.

   [`Sorted Linked List`](../src/linked-list/sorted-linked-list.js.js) 

   * Stack linked list : 

   [`Stack Linked List`](../src/linked-list/stack-linked-list.js.js) 

## Few practical use cases for Linked List
    - Online gaming
    - Poker, board game, dominoes

## Why linked list are a good data strcuture to use in lower level languages than actually deal with memory ?
1. It deals with memory managment like physical memory speace on your hard drive is that they allow you to break up a lot of data into little pieces that can be spread across different aeas and they don't necessarily have to be stored together.