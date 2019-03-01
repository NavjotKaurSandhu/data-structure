## Stack : 

1. A stack is an ordered collection of items that follows the last in, first out (LIFO) principle.
2. Stack is a linear data structure in which addition or removal of element follows a particular order i.e. LIFO(Last in First Out).
3. Methods in Stack:
   * push(element(s)): This method adds a new element (or several elements) to the top of the stack.
   * pop(): This method removes the top element from the stack. It also returns the removed element.
   * peek(): This method returns the top element from the stack. The stack is not modified (it does not remove the element; it only returns the element for information purposes).
   * isEmpty(): This method returns true if the stack does not contain any elements, and false if the size of the stack is bigger than 0.
   * clear(): This method removes all the elements of the stack.
   * size(): This method returns the number of elements that the stack contains. It is similar to the length property of an array.
4. Stack implementations :
    * [`Stack`](../src/stack/stack.js)
    * [`Stack with Array`](../src/stack/stack-array.js) 
    * [`Stack with Symbol`](../src/stack/stack-symbols.js)
    * [`Stack with WeakMap`](../src/stack/stack-weak-map.js)
    * [`Stack with Decimal to Binary`](../src/stack/stack-decimal-binary.js)