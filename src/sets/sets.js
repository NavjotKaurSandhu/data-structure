class Set {

    constructor() {
        this.items = {};
    }

    // Whether element exists in Set or not
    has(element) {
        // The Object prototype has the hasOwnProperty method. This method returns a boolean indicating whether the object has the specified property directly in the object or not, while the in operator returns a boolean indicating whether the object has the specified property in the object chain.
        // return element in this.items;
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }

    // Insert element in Set
    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }

    // Delete a element from Set
    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }

    // Delete all element from Set
    clear() {
        this.items = {};
    }

    // Get size of Set : Code is supported in modern browsers not in all
    size() {
        return Object.keys(this.items).length;

    }

    // Get size of Set : Code is supported in all browsers
    sizeLegacy() {
        let count = 0;
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                count++;
            }
        }
        return count;
    }

    // Return values of element of Set : Code is supported in modern browsers not in all
    values() {
        return Object.values(this.items);
    }

    // Return values of element of Set : Code is supported in all browsers
    values() {
        let values = [];
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                values.push(key);
            }
        }
        return values;
    }
}

const set = new Set(); 
 
set.add(1); 
console.log(set.values()); // outputs [1] 
console.log(set.has(1));   // outputs true 
console.log(set.size());   // outputs 1 
 
set.add(2); 
console.log(set.values()); // outputs [1, 2] 
console.log(set.has(2));   // true 
console.log(set.size());   // 2 
 
set.delete(1); 
console.log(set.values()); // outputs [2] 
 
set.delete(2); 
console.log(set.values()); // outputs [] 