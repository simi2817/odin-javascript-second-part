import Tree from "./tree.js";

const driver = (size) => {
    const randomArray = [];
    for(let i = 0; i < size; i++)
        randomArray.push(Math.floor(Math.random() * 100) + 1);
    return randomArray;
}

//Create a binary search tree from an array of random numbers < 100. 
const inputArr = driver(5);
const tree = new Tree(inputArr);
tree.printTree();
console.log('------------------------------------------------------------------');

//Confirm that the tree is balanced by calling isBalanced.
console.log(`Is tree balanced? ${tree.isBalanced()}`);
console.log('------------------------------------------------------------------');

//Print out all elements in level, pre, post, and in order.
console.log(`Level-Ordered Tree - ${tree.levelOrder()}`);
console.log(`Pre-Ordered Tree - ${tree.preOrder()}`);
console.log(`Post-Ordered Tree - ${tree.postOrder()}`);
console.log(`In-Ordered Tree - ${tree.inOrder()}`);
console.log('------------------------------------------------------------------');

//Unbalance the tree by adding several numbers > 100.
for(let i = 0; i < 5; i++)
    tree.insert(Math.floor(Math.random() * 50));
tree.printTree();
console.log(`Is tree balanced? ${tree.isBalanced()}`);
console.log('------------------------------------------------------------------');

//Balance the tree by calling rebalance.
tree.rebalance();

//Confirm that the tree is balanced by calling isBalanced.
console.log(`Is tree balanced after rebalance-ing? ${tree.isBalanced()}`);
console.log('------------------------------------------------------------------');

//Print out all elements in level, pre, post, and in order.
console.log(`Level-Ordered Tree - ${tree.levelOrder()}`);
console.log(`Pre-Ordered Tree - ${tree.preOrder()}`);
console.log(`Post-Ordered Tree - ${tree.postOrder()}`);
console.log(`In-Ordered Tree - ${tree.inOrder()}`);
console.log('------------------------------------------------------------------');

//Insert the element - 15, find it on the tree and then delete it
tree.insert(15);
tree.printTree();
console.log(`node found for 15 - ${JSON.stringify(tree.find(15))}`);
tree.delete(15);
tree.printTree();
console.log('node 15 is deleted!');
console.log('------------------------------------------------------------------');

export default driver;