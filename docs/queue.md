## Queue :

1. A queue is an ordered collection of items that follows the first in, first out (FIFO), also known as the first come, first served, principle.
2. Eg: movies, the cafeteria, and a checkout line at a grocery store 
3. Methods in Queue:
   * enqueue(element): This method adds a new element at the back of the queue.
   * dequeue(): This method removes the first element from the queue (the item that is in the front of the queue). It also returns the removed element.
   * peek(): This method returns the first element from the queue, the first one added, and the first one that will be removed from the queue. The queue is not modified (it does not remove the element; it only returns the element for information purposes - very similar to the peek method from the Stack class). This method also works as the front method, as it is known in other languages. 
   * isEmpty(): This method returns true if the queue does not contain any elements, and false if the queue size is bigger than 0.
   * size(): This method returns the number of elements the queue contains. It is similar to the length property of the array.

[`See Queue examples here`](../src/queue/queue.js)