//Linked List is a set of nodes. Pointing in one direction. 

// Time Complexity
// Insertion - O(1)
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class LinkedList {

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
           this.tail = newNode;
        }
        this.length++;
    }

    pop() {
        // Time Complexity - O(1) or O(n) if end
        if (this.head != null) {
            var tempNode = this.head;
            if (this.head == this.tail) {
                this.head = this.tail = null;
                return tempNode.value;
            }

            var prevNode = new Node();
            while (tempNode.next!= null) {
                prevNode = tempNode;
                tempNode = tempNode.next;
            }
            
            if (tempNode.tail == null) {
                this.tail = prevNode;
                this.tail.next = null;
                this.length--;
            }

            return tempNode.value;
        }
        return undefined;
    }
    shift() {
        //Removing node from beginning
        if (this.head == null)  return undefined;
        
        var tempNode = this.head;
        this.head = tempNode.next;
        this.length--; 
        return tempNode.value;
    }

    unshift(value) {
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

    get(index) {
        if ((index == 0 && this.head == null))  return undefined;
        var tempNode = this.head;
        while (index>0) {
            tempNode = tempNode.next; index--;
        }
        return tempNode;
    }
    set (index, value) {
        //sets the value of the node at index
        var tempNode = this.get(index);
        if (tempNode == null) return undefined;
        tempNode.value = value;
        return tempNode.value;
    }

    insert(index, value) {
        if (index < 0 || index> this.length) return false;
        if (index === 0)  return !!this.unshift(value); 
        
        var prevNode = this.get(index-1);
        var newNode = new Node(value);
        newNode.next =prevNode.next;
        if (prevNode) {
            prevNode.next = newNode;
        }
        this.length++;
        return !!newNode;

    }
    remove (index) {
        if (index<0 || index> this.length) return;
        if (index == this.length -1) return !!this.pop();
        if (index == 0)
            return !!this.shift();
        var removeNode = this.get(index);
        var prevNode = this.get(index-1);
        prevNode.next = removeNode.next;
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

var ll = new LinkedList();
ll.push("f1");
ll.push("f2");
ll.push("f3");
//console.log(ll.get(1).value);

ll.insert(1,"f4");
// console.log(ll.get(0).value);
// console.log(ll.get(1).value);
// console.log(ll.get(2).value);
//console.log(ll.get(3).value);
ll.reverse();