function factorial(number) {

    if (number === 1) {
        return number;
    } else {
        return number * factorial(number-1);
    }

}

factorial(5);