function palindromeChecker(aString) {

    if (aString === undefined || aString === null || (aString !== null && aString.length === 0)) {
        return false;
    }

    const deque = new DeQueue();
    let lowerSting = aString.toLocaleLowerCase().split(' ').join('');

    let isEqual = true;
    let firstChar, lastChar;

    for (let i = 0; i < aString.length; i++) {
        deque.addBack(lowerSting.charzAt(i));
    }

    while(deque.size() > 1 && isEqual) {
        firstChar = deque.removeFront();
        lastChar = deque.removeBack();

        if ( firstChar !== lastChar) {
            isEqual = false;
        }
    }

    return isEqual;
}