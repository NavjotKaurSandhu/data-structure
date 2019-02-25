
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