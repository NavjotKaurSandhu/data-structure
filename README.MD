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

## Different types of data structure :
1. [`Arrays`](docs/arrays.md)
2. [`Stack`](docs/stack.md)
3. [`Queue`](docs/queue.md)
4. [`DeQueue`](docs/de-queue.md)
5. [`Linked List`](docs/linked-list.md)
6. [`Sets`](docs/sets.md)

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

6. Big O Notation implementation :
    * [`Big O Notation`](src/big-o-notation/big-o-notation.js)

## Binary Tree : 
1. It is a collection of nodes that are all connected together in a certain way each node in a binary search tree you will have up to 2 child nodes left node and right node.
   * All the left nodes will be lesser and equal value then their parent node.
   * All the right node will be greater value than their parent node.
2. Following are the traversal types :
   * Depth First Traversal : We will start at the top and follow each branch all the way down to its bottom.
   * Breadth First Traversal : We will also start at the top but we will go across each level before moving down to next level.