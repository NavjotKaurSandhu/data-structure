## Sets

1. Sequential data structure such as arrays(lists), stacks, queues and linked list.
2. It is also a sequential data structure that does not allow duplicated values.
3. A set is a collection of items that are unordered and consists of unique elements (meaning they cannot be repeated).
4. In mathematics, a set is a collection of distinct objects.
    N = {0, 1, 2, 3, 4, 5, 6, ..}
5. A set with no element is called a null set or an empty set. An example would be a set of prime numbers between 24 and 29. Since there is no prime number (a natural number greater than 1 that has no positive divisors other than 1 and itself) between 24 and 29, the set will be empty. We will represent an empty set with { }. 
6. Methods of Sets:
   * add(element): This adds a new element to the set.
   * delete(element): This removes the element from the set.
   * has(element): This returns true if the element exists in the set and false otherwise.
   * clear(): This removes all the elements from the set.
   * size(): This returns how many elements the set contains. It is similar to the length property of an array.
   * values(): This returns an array of all the values (elements) of the set.
7. Operations in Sets:
   * Union: 
       - Given two sets, this returns a new set of elements from both of the given sets.
       - The union of sets A and B is denoted by:
           
           ```
            A ⋃ B
           ```
       - And is defined as:
           
           ```
            A ⋃ B = x ∣ x ∊ A ⋁ x ∊ B
           ```
        - Where ∊ : Set membership In mathematics, an element, or member, of a set is any one of the distinct objects that make up that set.
           ⋁ : or is the truth-functional operator of (inclusive) disjunction, also known as alternation; the or of a set of operands is true if and only if one or more of its operands is true. The logical connective that represents this operator is typically written as ∨ or +.
           ∣ : Such that

   * Intersection: Given two sets, this returns a new set with the elements that exist in both sets
   * Difference: Given two sets, this returns a new set with all the elements that exist in the first set and do not exist in the second set
   * Subset: This confirms whether a given set is a subset of another set

[`See Sets examples here`](../src/sets/sets.js) 