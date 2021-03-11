class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length = 0;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    pop() {
        if (!this.head) return null;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (!this.length) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}

const list = new SinglyLinkedList();
list.push('a');
list.push('b');
list.push('c');
list.push('d');
list.push('e');
list.pop();
list.traverse()
