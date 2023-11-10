import buildTree from './buildTree.js';
import prettyPrint from './prettyPrint.js';
import Node from './node.js';

class Tree {
    constructor(array) {
        this.root = buildTree(array);
    }

    printTree() {
        prettyPrint(this.root);
    }

    insert(value, root = this.root) {
        if(root == null)
            return root = new Node(value);
        if(value < root.data)
            root.left = this.insert(value, root.left);
        else
            root.right = this.insert(value, root.right);
        return root;
    }

    delete(value, root = this.root) {
        if(root === null)
            return root;
        if(root.data > value) {
            root.left = this.delete(value, root.left);
            return root;
        }
        else if(value > root.data) {
            root.right = this.delete(value, root.right);
            return root;
        }

        if(root.left === null) {
            let temp = root.right;
            root = null;
            return temp;
        }
        else if(root.right === null) {
            let temp = root.left;
            root = null;
            return temp;
        }
        else {
            let successorParent = root;
            let successor = root.right;
            while(successor.left !== null) {
                successorParent = successor;
                successor = successor.left;
            }
            if(successorParent !== root)
                successorParent.left = successor.right;
            else
                successorParent.right = successor.right;
            successor = null;
            return root;
        }
    }

    find(value, root = this.root) {
        if(root === null || root.data === value)
            return root;
        if(root.data < value)
            return this.find(value, root.right);
        return this.find(value, root.left);
    }
    
    levelOrder(root = this.root) {
        if(root === null)
            return;
        const queue = [];
        const list = [];
        queue.push(root);
        while(queue.length !== 0) {
            let tempNode = queue.shift();
            list.push(tempNode.data);
            if(tempNode.left !== null)
                queue.push(tempNode.left);
            if(tempNode.right !== null)
                queue.push(tempNode.right);
        }
            return list;
    }

    inOrder(root = this.root, list = []) {
        if(root === null)
            return;
        this.inOrder(root.left, list);
        list.push(root.data);
        this.inOrder(root.right, list);

        if(list)
            return list;
    }

    preOrder(root = this.root, list = []) {
        if(root === null)
            return;
        list.push(root.data);
        this.preOrder(root.left, list);
        this.preOrder(root.right, list);

        if(list)
            return list;
    }

    postOrder(root = this.root, list = []) {
        if(root === null)
            return;
        this.postOrder(root.left, list);
        this.postOrder(root.right, list);
        list.push(root.data);

        if(list)
            return list;
    }

    height(node = this.root) {
        if(node === null)
            return 0;
        else {
            let lDepth = this.height(node.left);
            let rDepth = this.height(node.right);
            if(lDepth > rDepth)
                return (lDepth + 1);
            else
                return (rDepth + 1);
        }
    }

    isBalanced() {
        const node = this.root;
        const lHeight = this.height(node.left); 
        const rHeight = this.height(node.right);
        const difference = Math.abs(lHeight - rHeight);
        if(difference <= 1)
            return true;
        else
            return false;
    }

    rebalance() {
        const orderedArray = this.inOrder();
        this.root = buildTree(orderedArray);
        return this.root;
    }
}

export default Tree;