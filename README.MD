## What is Data Structure :
1. A way of organizing data that is stored in a computer or database
2. Each type of data structure represents a different way of organizing the data.

## Why are there different types of DS :
1. They all have different strengths and weaknesses.
2. Some are fast at stroing and recording data while others are not.
3. Some are fasr at searching and retrieving data while others are not.

## Why are data structures important to know?
1. Can have big impact on how performant, quick and efficiently a program runs.
    * In case if you want to store data in database but don't want to retrieve it then Linked List is the best example which is really fast at recording data even though it's not fast at retrieving that data.
    * In case if you want to access data, we can use Hash Table.
2. Reinforce knowledge of JS algorithm and other important concepts.
    * Constructor Functions
    * Recursion
    * This Keyword
    * Prototype Oject
    * Big O notation

## Constructor Function : 
1. It is simply a function that creates an object class and allows you to create multiple instance of that class very easily.
    
    ```
    function User(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }
    var user1 = new User('Nav', 'K', 24, 'female');
    var user200 = new User('Nav11', 'K11', 25, 'female');
    ```

## Prototype : 
1. It simply an object that multiple other objects.
2. These objects can be refer to get any information or functionality that is need.
    
    ```
    User.prototype.emailDomain = '@facebook.com';
    User.prototype.getEmailAddress = function() {
        return this.firstName + this.lastName + this.emailDomain;
    }
    ```

## Arrays : 
1. An array stores values that are all of the same datatype sequentially. 
2. Although JavaScript allows us to create arrays with values from different datatypes
3. Ways to create and initialize arrays :
    * Using new keyword :
    
        ```
        let daysOfWeek = new Array();
        daysOfWeek = new Array(7); // Fix the size of array
        daysOfWeek = new Array('S', 'M', 'T', 'W', 'TH', 'F', 'SA'); // Initializing values
        ```
    * Using literal format :
    
        ```
        let daysOfWeek = [];
        daysOfWeek = ['S', 'M', 'T', 'W', 'TH', 'F', 'SA'];
        ```
4. JavaScript only supports one-dimensional arrays. 
5. It does not support matrices. However, we can implement matrices or any multi-dimensional array using an array of arrays :
    
    ```
    let averageTemp = []; 
    averageTemp[0] = [72, 75, 79, 79, 81, 81]; 
    averageTemp[1] = [81, 79, 75, 75, 73, 73];
    ```
5. Operation performed on array :
    * Adding element into an array :
        - push : Insert element at the end of an array
        - unshift : Insert element in the begining of an array
        - splice : Insert element in specific position in an array
    * Removing element from an array :
        - pop : Remove element from the end of an array
        - shift : Remove element from the beginning of an array
        - splice : Remove element in specific position in an array
    * Joining multiple arrays
        - concat : join two arrays
    * Sorting elements
        - reverse
        - sort
    * Searching elements
        - indexOf
        - lastIndexOf
        - find
        - findIndex
        - includes
    * Iterating an array
        - for...of : (Available in ES2015 or ES6) Iterates through the values of an array.
        - every : Iterates each element of an array untill function returns false. If the condition returns false then array iteration will not happen for rest of elements in an array.
        - some : Iterates each elment of an array untill function returns true. If the condition returns true then array iteration will not happen for rest of elements in an array.
        - forEach : If we need the array to be completely iterated no matter what, we can use the forEach function.
        - map : It returns new array with a result. For each element it returns the result whether it is true or false. It covers each item of an array.
        - filter : It returns new array with a result which include only true condition. It is used to select certain items of an array.
        - reduce : It is used to reduce the array into one single value. It reduces the array into one single value and returns it upon completion.
        - @@iterator : (Available in ES2015 or ES6) It is used to loop over any collection in JavaScript. 
            * If we have object inside object and that object contain arrays, to loop this type of object we use @@iterator. 
            * Symbols offer names that are unique and cannot clash with other property names.
            * Also, Symbol.iterator will return an object called an iterator. This iterator will have a method called next which will return an object with keys value and done.
            * The value key will contain the current value. It can be of any type. The done is boolean. It denotes whether all the values have been fetched or not.
            * It is an object which defines a sequence and potentially a return value upon its termination. 
            * More specifically an iterator is any object which implements the iterator protocol by having a next() method which returns an object with two properties: value, the next value in the sequence; and done, which is true if the last value in the sequence has already been consumed
        - entries : (Available in ES2015 or ES6) It returns a new array iterator object that contains the key/value pairs for each index in an array.
            * To be able to retrieve key/value pairs is very useful when we are working with sets, dictionaries, and hash maps.
        - keys : (Available in ES2015 or ES6) It returns @@iterator, which contains the keys of an array.
        - values : It returns @@iterator, which contains the values of the array.
        - from : (Available in ES2015 or ES6) The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
            * It is alternative of map.
            * Allows you to create arrays from other types of collections.
            * Since document.querySelectorAll returns a NodeCollection, not an array, you couldn’t use array functions like forEach.
            * It is used to convert kinds of objects to arrays :
                * Array-like objects : which has property length and indexed elements. 
                    *Eg: DOM operation such as document.getElementByClassName().*
                * Iterable objects: whose contents can be retrieved one element at a time. (Objects where you can get its elements, such as Map and Set)
            * We can pass any type of data to get it converted into array.
        - of : (Available in ES2015 or ES6) : Array.of provides a constructor that, unlike array, does not have the special case for new Array(42), which presets length.
            * If it has several arguments, it behaves like an array literal. If it has a single argument, it creates an empty array of the given length. Array.of also ensures that your arrays don’t accidentally have holes.
            * Array.of() and array is in how they handle a single integer argument passed to them.
            * While Array.of(5) creates a new array with a single element, 5, and a length property of 1, Array(5) creates a new empty array with 5 empty slots and a length property of 5.
        - copyWithin : (Available in ES2015 or ES6) : It copies a sequence of values of the array into the position of a start index.

[`See Array examples here`](src/array/array.js)

## TypedArray : 
1. It is used for handling binary data.
2. Types of binar data :
    1. Processing binary data : Manipulating image data in HTML canvas elements, parsing binary files, handling binary network protocols, etc.
    2. Interacting with native APIs : Native API's receive and return data in binary format, which you could neither store nor manipulate well in traditional JavaScript. That meant that whenever you were communicating with such an API, data had to be converted from JavaScript to binary and back, for every call. Eg: WebGL
3. Two kinds of objects work together in the Typed Array API: 
    * Buffers : Instances of ArrayBuffer hold the binary data.
    * Views : Provide the methods for accessing the binary data. There are two kinds of views:
        -> An instance of a Typed Array constructor (Uint8Array, Float64Array, etc.) works much like a normal Array, but only allows a single type for its elements and doesn’t have holes.
        -> An instance of DataView lets you access data at any byte offset in the buffer, and interprets that data as one of several types (Uint8, Float64, etc.).
4. Syntax :
    new TypedArray(); // new in ES2017
    new TypedArray(length);
    new TypedArray(typedArray);
    new TypedArray(object);
    new TypedArray(buffer [, byteOffset [, length]]);

    where TypedArray() is one of:

    Int8Array();
    Uint8Array();
    Uint8ClampedArray();
    Int16Array();
    Uint16Array();
    Int32Array();
    Uint32Array();
    Float32Array();
    Float64Array();

[`See TypedArray examples here`](src/array/typed-array.js)

## forEach vs filter
1. The main difference between forEach and filter is that forEach just loop over the array and executes the callback but filter executes the callback and check its return value.
2. (filter) If the value is true element remains in the resulting array but if the return value is false the element will be removed for the resulting array.

## find vs findIndex
1. The find method returns the first value of the array that satisfies the proposed condition. 
2. The findIndex method, on the other hand, returns the index of the first value of the array that satisfies the condition.

## Stack : 
1. A stack is an ordered collection of items that follows the last in, first out (LIFO) principle.
2. Stack is a linear data structure in which addition or removal of element follows a particular order i.e. LIFO(Last in First Out).
3. Methods in Stack class:
   1. push(element(s)): This method adds a new element (or several elements) to the top of the stack.
   2. pop(): This method removes the top element from the stack. It also returns the removed element.
   3. peek(): This method returns the top element from the stack. The stack is not modified (it does not remove the element; it only returns the element for information purposes).
   4. isEmpty(): This method returns true if the stack does not contain any elements, and false if the size of the stack is bigger than 0.
   5. clear(): This method removes all the elements of the stack.
   6. size(): This method returns the number of elements that the stack contains. It is similar to the length property of an array

[`See Stack examples here`](src/stack/stack-array.js) [`and here`](src/stack/stack.js)

## Symbol : 
1. They are tokens that serve as unique IDs. 
2. You create symbols via the factory function Symbol()
3. If a symbol has no description, JavaScript engines could use the name of the variable (or property) that a symbol is assigned to.
4. Symbols are mainly used as unique property keys – a symbol never clashes with any other property key (symbol or string).
5. It takes an optional description argument, used only for debugging purposes.
6. Symbols primary use case is for making private object properties, which can be only of type String or Symbol.
7. Using Symbols for object properties is handy for hiding certain properties that might name clash with other libraries.
8. So, they're not entirely private, but they are skipped in common iteration cycles.
    
    ```
    Object.getOwnPropertySymbols(foo) // Symbol()
    Reflect.ownKeys(foo) // Symbol()
    ```
    
[`See Symbol examples here`](src/stack/stack-symbols.js) [`and here`](src/symbol.js)

## Global Symbols
1. It is not unique but they do have a purpose.
2. You can use the Symbol.for(key) method to both create and access Global Symbols.
3. Symbol.for(key) : creates a Symbol in a “global Symbol registry”.

## WeakMap : 
1. It is a collection of key/value pairs in which the keys are weakly referenced.
2. There is one datatype we can use to ensure that the property will be private in a class, and it is called WeakMap.
3. It can store a key value pair, where the key is an object and the value can be any datatype or any values.
4. Keys of WeakMaps are of the type Object only. Primitive data types as keys are not allowed (e.g. a Symbol can't be a WeakMap key).
5. WeakMaps provide a way to extend objects from the outside without interfering with garbage collection.
6. Whenever you want to extend an object but can't because it is sealed - or from an external source - a WeakMap can be applied.
7. If the object is destroyed, the garbage collector knows to come and remove the entire entry from the Weakmap thus freeing up memory.

[`See WeakMap examples here`](src/stack/stack-weak-map.js) [`and here`](src/weak-map.js)

## WeakMap vs Map :
1. how the objects that are used as keys are treated during garbage collection.
2. Without the Maps, running delete window.obj would remove the only reference to the obj object, and the object would be removed from memory.
3. However, since obj is used as a key in our Map there still is a reference to obj and it can’t be garbage collected.
4. They only hold a weak reference to obj, meaning that after running removing the obj reference from the window object, obj can be garbage collected.
5. Map allows for arbitrarily named keys where as Weakmap keys are an object which can be either {} or function() {} because function inherit from object.

## Field or Field Proposal : 
1. We will be able to declare private properties by prefixing the properties with the hash symbol (#).
    
    ```
    class Stack {
    
        #count = 0;
        #items = 0;

        // stack methods
    }
    ```

## Queue :
1. A queue is an ordered collection of items that follows the first in, first out (FIFO), also known as the first come, first served, principle.
2. Eg: movies, the cafeteria, and a checkout line at a grocery store 
Methods in Queue:
1. enqueue(element): This method adds a new element at the back of the queue.
2. dequeue(): This method removes the first element from the queue (the item that is in the front of the queue). It also returns the removed element.
3. peek(): This method returns the first element from the queue, the first one added, and the first one that will be removed from the queue. The queue is not modified (it does not remove the element; it only returns the element for information purposes - very similar to the peek method from the Stack class). This method also works as the front method, as it is known in other languages. 
4. isEmpty(): This method returns true if the queue does not contain any elements, and false if the queue size is bigger than 0.
5. size(): This method returns the number of elements the queue contains. It is similar to the length property of the array.

[`See Queue examples here`](src/queue/queue.js)

# DeQueue: 
1. The deque data structure, also known as the double-ended queue, is a special queue that allows us to insert and remove elements from the end or from the front of the queue. 
2. Eg: Movie theaters, Cafeterias, and so on.
Methods for DeQueue:
1. addFront(element): This method adds a new element at the front of the deque
2. addBack(element): This method adds a new element at the back of the deque (same implementation as the enqueue method from the Queue class)
3. removeFront(): This method removes the first element from the deque (the same implementation as the dequeue method from the Queue class)
4. removeBack(): This method removes the last element from the deque (the same implementation as the pop method from the Stack class)
5. peekFront(): This method returns the first element from the deque (the same implementation as the peek method from the Queue class)
6. peekBack(): This method returns the last element from the deque (the same implementation as the peek method from the Stack class)

[`See DeQueue examples here`](src/queue/dequeue.js) 
[`See Hot Potato Game with Circular Queue examples here`](src/queue/circular-hot-potato-game.js) 
[`See Palindrome Checker with DeQueue examples here`](src/queue/de-queue-palindrome-checker.js) 

# Linked List : 
1. It is a list of elements called nodes that are connected together or linked together in a single file line.
2. The first example is a conga line. Each person is an element, and the hands would be the pointer that links to the next person in the conga line. You can add people to the line—you just need to find the spot where you want to add the person, decouple the connection, then insert the new person and make the connection again.
3. Another example would be a scavenger hunt. You have a clue, and this clue is the pointer to the place where you can find the next clue. With this link, you go to the next place and get another clue that will lead to the next one. The only way to get a clue from the middle of the list is to follow the list from the beginning (from the first clue).
4. A train consists of a series of vehicles (also known as wagons). Each vehicle or wagon is linked to each other. You can easily decouple a wagon, change its place, or add or remove it.
5. Eg:

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
6. Different types of Linked List:
   1. Singly linked list : 
      * Each node only has reference to the node after it or the next node.
      * Methods of Single Linked List:
         * push(element): This method adds a new element to the end of the list.
         * insert(element, position): This method inserts a new element at a specified position in the list.
         * getElementAt(index): This method returns the element of a specific position in the list. If the element does not exist in the list, it returns undefined.
         * remove(element): This method removes an element from the list.
         * indexOf(element): This method returns the index of the element in the list. If the element does not exist in the list, it returns -1.
         * removeAt(position): This method removes an item from a specified position in the list.
         * isEmpty(): This method returns true if the linked list does not contain any elements, and false if the size of the linked list is bigger than 0.
         * size(): This method returns the number of elements the linked list contains. It is similar to the length property of the array.
         * toString(): This method returns a string representation of the linked list. As the list uses a Node class as an element, we need to overwrite the default toString method inherited from the JavaScript Object class to output only the element values.

[`See Single Linked List examples here`](src/linked-list/single-linked-list.js) 

   2. Double linked list : 
      * Each node has a reference to the next node but it also has a reference to the one before it as well or the previous node.

[`See Double Linked List examples here`](src/linked-list/doubly-linked-list.js) 

   3. Circular linked list : 
      * A circular linked list can have only one reference direction (as with a linked list) or a double reference (as with a doubly linked list). The only difference between a circular linked list and a linked list is that the last element's next (tail.next) pointer does not make a reference to undefined, but to the first element (head).

[`See Circular Linked List examples here`](src/linked-list/circular-linked-list.js) 

   4. Doubly linked list : A doubly circular linked list has tail.next pointing to the head element, and head.prev pointing to the tail element.

   5. Sorted linked list : A sorted linked list is a list that keeps its elements sorted. To keep all elements sorted, instead of applying a sorting algorithm, we will insert the element at its correct position so as to keep the list always sorted.

[`See Sorted Linked List examples here`](src/linked-list/sorted-linked-list.js.js) 

6. Stack linked list : 

[`See Stack Linked List examples here`](src/linked-list/stack-linked-list.js.js) 

## Big O Notation : 
1. It is a notation used to classify how scable function or algorithm is.
2. It allows us to estimate the worst case a runtime of an algorithm or how long it takes the algorithm to complete based on the input size.
3. It informs us of how much slower an algorithm will run if it's input size grows.
4. Linked List Big O Notation :
   
   ```
      Adding/removing head or Adding/removing tail :
         - Constant Time
         - O(1)
   ```
**NOTE: It is constant rumtime because we are using our head and tail pointers to keep track of our head and tail nodes. Therefore we never have to iterate through the whole linked list to find the head or tail.**

5. Searching through Linked List :

   ```
      - Linear time complexity
      - O(n)
   ```
**NOTE: In case of search, there will some scenario where we need to iterate over the whole linked list.So the Linked List size will grow and our search iteration increases.**

## Few practical use cases for Linked List
    - Online gaming
    - Poker, board game, dominoes

## Why linked list are a good data strcuture to use in lower level languages than actually deal with memory ?
1. It deals with memory managment like physical memory speace on your hard drive is that they allow you to break up a lot of data into little pieces that can be spread across different aeas and they don't necessarily have to be stored together.

## Sets 
1. Sequential data structure such as arrays(lists), stacks, queues and linked list.
2. It is also a sequential data structure that does not allow duplicated values.
3. A set is a collection of items that are unordered and consists of unique elements (meaning they cannot be repeated).
4. In mathematics, a set is a collection of distinct objects.
    N = {0, 1, 2, 3, 4, 5, 6, ..}
5. A set with no element is called a null set or an empty set. An example would be a set of prime numbers between 24 and 29. Since there is no prime number (a natural number greater than 1 that has no positive divisors other than 1 and itself) between 24 and 29, the set will be empty. We will represent an empty set with { }. 
6. Methods of Sets:
   1. add(element): This adds a new element to the set.
   2. delete(element): This removes the element from the set.
   3. has(element): This returns true if the element exists in the set and false otherwise.
   4. clear(): This removes all the elements from the set.
   5. size(): This returns how many elements the set contains. It is similar to the length property of an array.
   6. values(): This returns an array of all the values (elements) of the set.
7. Operations in Sets:
   1. Union: 
       -> Given two sets, this returns a new set of elements from both of the given sets.
       -> The union of sets A and B is denoted by:
           A ⋃ B
       -> And is defined as:
           A ⋃ B = x ∣ x ∊ A ⋁ x ∊ B
           ∊ : 
           => Set membership In mathematics, an element, or member, of a set is any one of the distinct objects that make up that set.
           ⋁ :
           => or is the truth-functional operator of (inclusive) disjunction, also known as alternation; the or of a set of operands is true if and only if one or more of its operands is true. The logical connective that represents this operator is typically written as ∨ or +.
           ∣ :
           => Such that

   2. Intersection: Given two sets, this returns a new set with the elements that exist in both sets
   3. Difference: Given two sets, this returns a new set with all the elements that exist in the first set and do not exist in the second set
   4. Subset: This confirms whether a given set is a subset of another set

[`See Sets examples here`](src/sets/sets.js) 

## Binary Tree : 
1. It is a collection of nodes that are all connected together in a certain way each node in a binary search tree you will have up to 2 child nodes left node and right node.
   * All the left nodes will be lesser and equal value then their parent node.
   * All the right node will be greater value than their parent node.
2. Following are the traversal :
   1. Depth First Traversal : We will start at the top and follow each branch all the way down to its bottom.
   2. Breadth First Traversal : We will also start at the top but we will go across each level before moving down to next level.

## Recursion : 
1. When function call itself again and again.
    
    ```
    function func() {
        if (somecondition) {
            return something;
        } else {
            func();
        }
    }
    ```

## Callstack : 
1. It represents what order out functions are being called in and what variables they're being called with.
