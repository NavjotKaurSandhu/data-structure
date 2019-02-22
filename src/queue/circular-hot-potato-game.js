function hotPotato(elementList, num) {

    let queue = new Queue();
    let elimintedList = [];

    for (let i = 0; i < elementList.length; i++) {
        queue.enQueue(elementList[i]);
    }

    while (queue.size() > 1) {

        for (let i = 0;  i < num; i++) {
            queue.enQueue(queue.deQueue());
        }

        elimintedList.push(queue.deQueue());
    }

    return {
        elimintedList: elimintedList,
        winner: queue.deQueue()
    }
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);
result.elimintedList.forEach(name => {
    console.log(`${name} was eliminated from the Hot Potato Game.`)
});

console.log(`The winner is : ${result.winner}`);