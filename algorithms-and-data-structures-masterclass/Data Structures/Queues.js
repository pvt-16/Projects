// Adding at end & removing from start.
// We can't do this in array, as we need to re-index everything while adding to the start.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class Queue {

    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    //Add to the end of the list
    enqueue(value) {
        var newNode = new Node(value);
        if (this.first == null) {
           this.first = this.last = newNode;
        }
        else {
           this.last.next = newNode;
           this.last = newNode;
        }
        this.length++;
    }

    dequeue () {
        //Removing node from beginning
        if (this.first == null)  return undefined;
        
        var tempNode = this.first;
        this.first = tempNode.next;
        if (this.first == null) this.last = null;
        this.length--; 
        return tempNode.value;
    }
}

