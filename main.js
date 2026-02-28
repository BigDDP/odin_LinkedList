console.log("Hello");

class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = newNode;
    }

    prepend(value) {
        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        newNode.nextNode = this.head;
        this.head = newNode;
    }

    insertAt(index, ...values) {
        let indexNextNode;
        let currentNode = this.head;

        for (let i = 1; i < index; i++) {

            currentNode = currentNode.nextNode;

            if (!currentNode) throw new RangeError("Error Text");
            if ( i === index - 1 ) {
                indexNextNode = currentNode.nextNode
            };
        }

        let prevLoopNode = currentNode

        for ( let i = 0; i < values.length; i++ ) {
            let newNode = new Node(values.at(i));
            prevLoopNode.nextNode = newNode
            prevLoopNode = newNode;
        }

        prevLoopNode.nextNode = indexNextNode;
    }

    // removeAt(index) {
    //     return;
    // }

    getHead() {
        console.log("HeadNode: ", this.head)
    }

    getTail() {
        let current = this.head;

        while (current) {
            if (current.nextNode === null) console.log("TailNode: ", current);
            current = current.nextNode;
        }
    }

    at(index) {
        let currentNode = this.head;

        for (let i = 1; i < index; i++) {

            currentNode = currentNode.nextNode;

            if (!currentNode) throw new RangeError("Error Text");
        }

        console.log(`At index(${index}) returns`, currentNode)
    }

    // pop() {
    //     return;
    // }

    contains(value) {
        let current = this.head
        let exists = false;

        while (current) {
            if (current.value === value) {
                exists = true
                break;
            }

            current = current.nextNode;
        }

        console.log(`Value "${value}" exists in List? `, exists)
    }

    findIndex(value) {
        let current = this.head
        let index = 1;

        while (current) {
            if (current.value === value) {
                break;
            }

            if (!current.nextNode) {
                index = -1
            } else {
                index++
            }

            current = current.nextNode 
        }
        
        console.log(`Item index for value "${value}" `, index)
    }

    size() {
        let current = this.head
        let size = 0

        while (current) {
            current = current.nextNode;
            size++
        }

        console.log("Size: ", size)
    }

    toString(msg) {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.value + " -> ";
            current = current.nextNode;
        }
        console.log(msg)
        console.log("Result: ", result + "null");
    }

}

// --- Usage ---
const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.append(35);
list.toString("1. Expected: 10 -> 20 -> 30 -> 35 -> null");
list.size(); // 4

list.prepend(5);
list.toString("2. Expected: 5 -> 10 -> 20 -> 30 -> 35 -> null");
list.size(); // 5

// list.insertAt(8, 50) // Error
list.insertAt(2, 35, 40);
list.toString("3. Expected: 5 -> 10 -> 35 -> 40 -> 20 -> 30 -> 35 -> null");
list.size(); // 7

// list.removeAt(5);
// list.size("Expected: 5 -> 10 -> 35 -> 15 -> 30 -> 35 -> null");

list.contains(35) // true;
list.contains(15) // false;

list.findIndex(15) // Expected: -1
list.findIndex(35) // Expected: 3
list.findIndex(20) // Expected: 4

list.getHead() // Expected: 5

list.getTail() // Expected: 35

list.at(2) // Expected: 10
list.at(4) // Expected: 40
list.at(6) // Expected: 30
// list.at(9) // Expected: Error

// list.pop()
// list.size("Expected: 5 -> 10 -> 35 -> 15 -> 30 -> null");