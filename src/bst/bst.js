function BST(value) {

    this.value = value;
    this.left = null;
    this.right = null;

}

BST.prototype.insert = function(value) {

    // Value less and equal to root node : LEFT NODE
    if (value <= this.value) {

        // Left child is not there
        if (!this.left) {
            this.left = new BST(value);
        // Left child is there
        } else {
            this.left.insert(value);
        }

    // Value greater than to root node : RIGHT NODE
    } else if (value > this.value){

        // Right child is not there
        if (!this.right) {
            this.right = new BST(value);
        // Right child is there
        } else {
            this.right.insert(value);
        }

    }

}

var bst = new BST(50);
bst.insert(30);
bst.insert(20);
bst.insert(10);
bst.insert(45);
bst.insert(35);
bst.insert(70);
bst.insert(60);
bst.insert(59);
bst.insert(100);
bst.insert(30);
bst.insert(85);
bst.insert(105);

console.log(bst.left);