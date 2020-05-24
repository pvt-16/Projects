//DoublyLinkedList.js

//Doubly Linked List is a set of nodes. Pointing in two direction. 

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }

}

class DoublyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        var newNode = new Node(value);
        if (this.head == null) {
           this.head = this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    pop() {
        if (!   this.head) {

            var tempNode = this.tail; length--;
            if (this.head == this.tail) {
                this.head = this.tail = null;
            } else {
                var newTailNode = this.tail.prev;
                this.tail.prev = newTailNode.next = null;
                this.tail = newTailNode;
            }
            return tempNode.value;
        }
        return undefined;
    }
    shift() {
        //Removing node from beginning
        if (this.head == null)  return undefined;
        var tempNode = this.head;
        if (this.length == 1) this.head = this.tail = null;
        else {
            this.head = tempNode.next;
            tempNode.next = this.head.prev = null;
        }
        this.length--; 
        return tempNode.value;
    }

    unshift(value) {
        //Add to the start of the Linked list
        var newNode = new Node(value);
        if (this.head == null) 
            this.head = this.tail = newNode;
        else {
            
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return newNode;
    }

    get(index) {
        if (index < 0 || this.head == null  || index >= this.length)  return undefined;
        
        if ( index > this.length/2) {
            var tempNode = this.tail;
            index = this.length -1 - index;
            while (index>0) {
                tempNode = tempNode.prev; index--;
            }
        } else {
            var tempNode = this.head;
            while (index>0) {
                tempNode = tempNode.next; index--;
            }
        }
        return tempNode;
    }
    set (index, value) {
        //sets the value of the node at index
        var tempNode = this.get(index);
        if (tempNode == null) return undefined;
        tempNode.value = value;
        return true;
    }

    insert(index, value) {
        if (index < 0 || index> this.length) return false;
        if (index === 0)  return !!this.unshift(value); 
        if (index == this.length) return this.push(value);

        var prevNode = this.get(index-1);
        var newNode = new Node(value);
        newNode.next =prevNode.next;
        newNode.prev = prevNode;
        prevNode.next = newNode;
        newNode.next.prev = newNode;
        this.length++;
        return !!newNode;

    }
    remove (index) {
        if (index<0 || index> this.length) return;
        if (index == this.length-1) return !!this.pop();
        if (index == 0)
            return !!this.shift();

        var removeNode = this.get(index);
        var prevNode = removeNode.prev;
        prevNode.next = removeNode.next;
        removeNode.next.prev = prevNode;
        removeNode.prev = removeNode.next = null;
        this.length--;
        return true;
    }
    reverse() {
        var currentNode = this.tail = this.head;
        var nextNode = currentNode.next, nextNodeRef = nextNode.next, prev = null;
        // while (nextNode!= null) {
        //     nextNode.next = currentNode;
        //     if (currentNode == this.head) 
        //         currentNode.next = null;
        //     currentNode = nextNode;
        //     nextNode = nextNodeRef;
        //     nextNodeRef = nextNodeRef ==null? null : nextNodeRef.next;
        // }
        while (nextNode) {

            currentNode.next = prev;
            prev = currentNode;
            currentNode = nextNode;
            nextNode = nextNode.next;
        }
        this.head = currentNode;
    }

    print() {
        var temp = this.head;
        while (temp) {
            console.log(temp.value);
            temp = temp.next;
        }
    }
}

var ll = new DoublyLinkedList();
ll.push("f1");
ll.push("f2");
ll.push("f3");
ll.push("f5");
ll.unshift("f4");
ll.print();
console.log(ll.get(4).value);

//ll.insert(1,"f4");
// console.log(ll.get(0).value);
// console.log(ll.get(1).value);
// console.log(ll.get(2).value);
//console.log(ll.get(3).value);
//ll.reverse();