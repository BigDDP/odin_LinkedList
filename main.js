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
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    insert(value, afterValue) {
        let current = this.head;
        while (current) {
            if (current.value === afterValue) {
            let newNode = new Node(value);
            newNode.next = current.next;
            current.next = newNode;
            return;
            }
            current = current.next;
        }
        console.log("Value not found in list");
    }

    delete(value) {
        if (!this.head) {
            console.log("List is empty, no element to delete");
            return;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        let prev = null;
        let current = this.head;
        while (current && current.value !== value) {
            prev = current;
            current = current.next;
        }
        if (!current) {
            console.log("Value not found in list");
            return;
        }
        prev.next = current.next;
    }

    insertAt(index) {

    }

    removeAt(index) {

    }

    head() {

    }

    tail() {

    }

    at(index) {

    }

    pop() {

    }

    contains(value) {

    }

    findIndex(value) {

    }

    toString() {

    }

    size(msg) {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.value + " -> ";
            current = current.next;
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
list.size("1. Expected: 10 -> 20 -> 30 -> null");

list.prepend(5);
list.size("2. Expected: 5 -> 10 -> 20 -> 30 -> null");

list.insertAt(15, 10);
list.size("3. Expected: 5 -> 10 -> 15 -> 20 -> 30 -> null");

list.delete(20);
list.size("4. Expected: 5 -> 10 -> 15 -> 30 -> null");

// list.insertAt(index)
// list.size(". Expected: -> null");

// list.removeAt(index)
// list.size(". Expected: -> null");

// list.head()
// list.size(". Expected: -> null");

// list.tail()
// list.size(". Expected: -> null");

// list.at(index)

// list.pop()

// list.contains(value)

// list.findIndex(value)

// list.toString()