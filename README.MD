## What is Data Structure :
1. A way of organizing data that is stored in a computer or database.
2. Each type of data structure represents a different way of organizing the data.

## Why there are different types of DS exists :
1. They all have different strengths and weaknesses.
2. Some are fast at stroing and recording data while others are not.
3. Some are fast at searching and retrieving data while others are not.

## Why data structure are important to know?
1. Can have big impact on how performant, quick and efficiently a program runs. Example :
    * In case if you want to store data in database but don't want to retrieve it then Linked List is the best example which is really fast at recording data even though it's not fast at retrieving that data.
    * In case if you want to access data, we can use Hash Table.
2. Reinforce knowledge of JS algorithm and other important concepts like :
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

## Some of important topics :
1. [`Arrays`](docs/arrays.md)
2. [`TypedArray`](docs/typed-array.md)
3. [`Stack`](docs/stack.md)
4. [`Symbol`](docs/symbol.md)
5. [`WeekMap`](docs/week-map.md)
6. [`Queue`](docs/queue.md)
7. [`DeQueue`](docs/de-queue.md)
8. [`Linked List`](docs/linked-list.md)
9. [`Sets`](docs/sets.md)

## ForEach vs Filter
1. The main difference between forEach and filter is that forEach just loop over the array and executes the callback but filter executes the callback and check its return value.
2. In filter if the value is true element remains in the resulting array but if the return value is false the element will be removed for the resulting array.

## Find vs FindIndex
1. The find method returns the first value of the array that satisfies the proposed condition. 
2. The findIndex method, on the other hand, returns the index of the first value of the array that satisfies the condition.

## Global Symbols
1. It is not unique but they do have a purpose.
2. You can use the Symbol.for(key) method to both create and access Global Symbols.
3. Symbol.for(key) : creates a Symbol in a “global Symbol registry”.

## WeakMap vs Map :
1. The difference between Map and WeakMap lies in how the objects that are used as keys are treated during garbage collection.
2. In Map, the array of keys would keep references to key objects, preventing them from being garbage collected. In native WeakMaps, references to key objects are held "weakly", which means that they do not prevent garbage collection in case there would be no other reference to the object.
3. Without the Map, running delete window.obj would remove the only reference to the object, and the object would be removed from memory. However, since obj is used as a key in our Map there still is a reference to obj and it can’t be garbage collected.
4. WeakMaps however are different: they act as if there was no additional reference to obj. They only hold a weak reference to obj, meaning that after running removing the obj reference from the window object, obj can be garbage collected.
5. Map allows for arbitrarily named keys where as Weakmap keys are an object which can be either {} or function() {} because function inherit from object.
6. In other words, Key in Map can be anything but Key in WeakMap must be of type Object (not null).
7. Map has size but WeakMap has length.
8. In Map we can use forEach() for iterating but not in WeakMap.

[`See WeakMap vs Map example`](src/weak-map.js)

## Field or Field Proposal : 
1. We will be able to declare private properties by prefixing the properties with the hash symbol (#).
    
    ```
    class Stack {
    
        #count = 0;
        #items = 0;

        // stack methods
    }
    ```
    
 [`Find more detail`](http://2ality.com/2017/07/class-fields.html)

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

## Binary Tree : 
1. It is a collection of nodes that are all connected together in a certain way each node in a binary search tree you will have up to 2 child nodes left node and right node.
   * All the left nodes will be lesser and equal value then their parent node.
   * All the right node will be greater value than their parent node.
2. Following are the traversal types :
   * Depth First Traversal : We will start at the top and follow each branch all the way down to its bottom.
   * Breadth First Traversal : We will also start at the top but we will go across each level before moving down to next level.

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
