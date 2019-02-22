// 1. Insert element in first position instead of last
var numbers = [1, 2, 3, 4, 5, 6];

Array.prototype.insertFirstPosition = function(value) {
    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i-1];
    }
    this[0] = value;
};

numbers.insertFirstPosition(0);

// 2. Insert value at start of array
numbers.unshift(-1);

// 3. Insert value at end of array
numbers.push(-2);

// 4. Removing element from the end of an array
numbers.pop();

// 5. Remove element from the beginning of an array
numbers.shift();

// 6. Removing element from start of any array
Array.prototype.removeFirstPosition = function() {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i+1];
    }

    return this.reIndex(this);
}

Array.prototype.reIndex = function(arr) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] !== undefined) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

// 7. It will delete 3 element from starting index with 5
numbers.splice(5, 3);

// 8. It will add 3 element from starting index with 5
numbers.splice(5, 0, 2, 3, 4); 

console.log(numbers);

// 9. Join 2 arrays
const zero = 0;
const positiveNumbers = [1, 2, 3, 4, 5];
const negativeNumbers = [-1, -2, -3, -4, -5];

let numberss = negativeNumbers.concat(zero, positiveNumbers);
console.log(numberss);

// 10. Iterating

let numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function isEven(x) {
    console.log(x);
    return x % 2 === 0 ? true : false;
}

numbersList.every(isEven);
numbersList.some(isEven);
numbersList.forEach(isEven);
numbersList.reduce((previous, current) => previous + current);
for (let n of numbersList) {
    console.log(n%2 === 0 ? 'even' : 'odd');
}

let iterator =  numbersList[Symbol.iterator]();
console.log(iterator.next().value);

let aEntries = numbersList.entries();
console.log(aEntries.next().value);
console.log(aEntries.next().value);

// Alertnate approach
let aEntries1 = numbersList.entries();
for (const n of aEntries1) { 
    console.log(n); 
} 

let akeys = numbersList.keys();
console.log(akeys.next());

let aVal = numbersList.values();
console.log(aVal.next());

// 11. Convert values into Array
console.log(Array.from('foo'));

// Array from an Array-like object(arguments)
function f() {
    return Array.from(arguments);
  }
  
  f(1, 2, 3);

const spans = document.querySelectorAll('span.name');

// map(), generically:
const names1 = Array.prototype.map.call(spans, s => s.textContent);

// Array.from():
const names2 = Array.from(spans, s => s.textContent);

// 12. Fill empty array with some default values
console.log(Array(6).fill(1));
console.log(numbersList.fill(1, 4, 8));

// 13. Copy values with in the Array
console.log(numbersList.copyWithin(3));
// copy to index 0 the element at index 3 to 4 (considered only 3 index element)
console.log(numbersList.copyWithin(0, 3, 4));
// copy to index 1 all elements from index 3 to the end
console.log(numbersList.copyWithin(1, 3));

// 14. Sorting elements
numbersList.reverse();
numbersList.sort();

const friends = [ 
    { name: 'John', age: 30 }, 
    { name: 'Ana', age: 20 }, 
    { name: 'Chris', age: 25 }, // trailing comma ES2017 
]; 
function comparePerson(a, b) { 
    if (a.age < b.age) { 
        return -1; 
    } 
    if (a.age > b.age) { 
        return 1; 
    } 
    return 0; 
} 
console.log(friends.sort(comparePerson)); 

// 15. Searching

console.log(numbers.indexOf(100)); 
console.log(numbers.lastIndexOf(100)); 
numbersList.find(function(element){console.log(element%2 === 0)});
numbersList.findIndex(function(element){console.log(element%2 === 0)});
console.log(numbersList.includes(2))
