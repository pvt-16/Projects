// We can use Array methods, push and pop but it has unnecessary additions to it like - length, other functions, index etc/
// We use singly linked list to create a Stack
// Stack- push the new item, pop the last entered item - FIFO.
// LL push= O(n), pop - variable max. O(n)
// We need stack pop to be constant. 
// So, we use shift and unshift methods from push and pop. Adding & removing from start.
// We can't do this in array, as we need to re-index everything while removing/ adding to the start.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class Stack {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    pop() {
        //Removing node from beginning
        if (this.head == null)  return undefined;
        
        var tempNode = this.head;
        this.head = tempNode.next;
        this.length--; 
        return tempNode.value;
    }

    push(value) {
        //Add to the start of the Linked list
        var newNode = new Node(value);
        if (this.head == null) 
            this.head = this.tail = newNode;
        else
            newNode.next = this.head;
            this.head = newNode;
        this.length++;
        return newNode;
    }
}

