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

    shifting() {
        if (!this.head) return null;
        let current = this.head.next;
        this.head = current;
        this.length--;
    }

    unshift(value) {
        const newHead = new Node(value);
        if (!this.head) {
            this.head = newHead;
            this.tail = this.head;
        };
        newHead.next = this.head;
        this.head = newHead;
        this.length++;
    }

    get(value) {
        if (!this.head) return null;
        let current = this.head;
        let count = 0;
        while (current.next) {
            if (current.value === value) {
                return count;
            }
            count++;
            current = current.next;
        }
        return count;
    }

    getValueByIndex(index) {
        if (index < 0 || index >= this.length) return null;
        let current = this.head;
        let count = 0;
        while (count > index) {
            current = current.next;
            count++;
        }
        return current;
    }

    update(value, index) {
        let node = this.getValueByIndex(index);
        if (node) {
            node.value = value;
            return true;
        }
        return false;
    }

    insert(value, index) {
        if (index < 0 || index >= this.length) return null;
        if (index == 0) return this.unshift(value);
        if (index === this.length - 1) this.push(value);
        let newNode = new Node(value);
        let prvNode = this.getValueByIndex(index - 1);
        let temp = prvNode.next;
        prvNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return null;
        if (index == 0) return this.shifting(value);
        if (index === this.length - 1) this.pop();
        let prvNode = this.getValueByIndex(index - 1);
        let removed = prvNode.next;
        prvNode.next = removed.next;
        this.length--;
        return removed;
    }

    revers() {

    }
}

const list = new SinglyLinkedList();
list.push('a');
list.push('b');
list.push('c');
list.push('d');
list.push('e');
list.traverse();
console.log(list.get('k'));

