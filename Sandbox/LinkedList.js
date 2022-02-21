/**
 * @param data: any data type
 * @param next: node
 */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * head: node
 */
class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    size() {
        let count = 0;
        let node = this.head;
        while(node) {
            count++;
            node = node.next;
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    getLast() {
        let node = this.head;
        while(node.next) {
            node = node.next;
        }
        return node;
    }

    getFirst() {
        return this.head;
    }

    //reverse a Singly Linked List
    reverseLinkedList(linkedList) {
        let node = linkedList;
        let previous = null;

        while(node) {
            let save = node.next;
            node.next = previous;
            previous = node;
            node = save;
        }

        return previous;
    }
}

let nodeA = new Node(10);
let nodeB = new Node(20);
nodeA.next = nodeB;

let linkedList = new LinkedList(nodeA); 

console.log(linkedList.head.data);
console.log(linkedList.size());