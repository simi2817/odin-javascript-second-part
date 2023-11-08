import Node from "./node.js";

class LinkedList {  
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(value) {
        const node = new Node(value);
        if(!this.head)
            this.head = node;
        else {
            const lastNode = this.at(this.length -1);
            lastNode.nextNode = node;
        }
        this.length++;
    }

    prepend(value) {
        const node = new Node(value);
        if(!this.head)
            this.head = node;
        else {
            let previous = this.head;
            this.head = node;
            node.nextNode = previous;
        }
        this.length++;
    }

    size() {
        return this.length;
    }

    head() {
        return this.head;
    }

    tail() {
        const lastNode = this.at(this.length - 1);
        return lastNode;
    }

    at(index) {
        let count = 0;
        let node = this.head;
        let nodeAtGivenIndex;
        while(node !== null) {
            if(count === index)
                nodeAtGivenIndex = node;
            node = node.nextNode;
            count++;
        }
        if(!nodeAtGivenIndex)
            return false;
        else
            return nodeAtGivenIndex;
    }

    pop() {
        let nodeBeforeLast = this.at(this.length - 2);
        nodeBeforeLast.nextNode = null;
        this.length--;
        return this.head;
    }

    contains(value) {
        let node = this.head;
        let flag = false;
        while(node !== null) {
            if(node.value === value)
                flag = true;
            node = node.nextNode;
        }
        return flag;   
    }

    find(value) {
        let index = 0;
        let node = this.head;
        let found = false;
        while(node !== null) {
            if(node.value === value) {
                found = true;
                break;
            }
            node = node.nextNode;
            index++;
        }
        if(found)
            return index;
        else
            return null;
    }

    toString() {
        let node = this.head;
        let output = '';
        while(node !== null) {
            output += `( ${node.value} ) -> `;
            node = node.nextNode;
        }
        output += null;
        return output;
    }

    insertAt(value, index) {
        if(index < 0 || index > this.length)
            return "Invalid Index!";
        else {
            const node = new Node(value);
            if(index === 0) {
                node.nextNode = this.head;
                this.head = node;
            }
            else {
                const listAtGivenIndex = this.at(index);
                const listAtBeforeGivenIndex = this.at(index - 1);
                
                listAtBeforeGivenIndex.nextNode = node;
                node.nextNode = listAtGivenIndex;
            }
            this.length++;
        }
        return this.head;
    }

    removeAt(index) {
        if(index < 0 && index >= this.length)
            return "Invalid index!";
        else {
            const elementAfterIndex = this.at(index + 1);
            if(index === 0)
                this.head = elementAfterIndex;
            else {
                const elementBeforeIndex = this.at(index - 1);
                
                if(elementAfterIndex)
                    elementBeforeIndex.nextNode = elementAfterIndex;
                else
                    elementBeforeIndex.nextNode = null;
            }
            this.length--;
        }        
        return this.head;
    }

    print() {
        console.log(this.head);
    }
}

export default LinkedList;

