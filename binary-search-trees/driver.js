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

/*
sample output - 
|      ┌── 89
|   ┌── 83
└── 67
   |   ┌── 31
   └── 16
------------------------------------------------------------------
Is tree balanced? true
------------------------------------------------------------------
Level-Ordered Tree - 67,16,83,31,89
Pre-Ordered Tree - 67,16,31,83,89
Post-Ordered Tree - 31,16,89,83,67
In-Ordered Tree - 16,31,67,83,89
------------------------------------------------------------------
|      ┌── 89
|   ┌── 83
└── 67
   |      ┌── 42
   |   ┌── 31
   |   |   └── 28
   └── 16
      |   ┌── 7
      └── 3
Is tree balanced? false
------------------------------------------------------------------
Is tree balanced after rebalance-ing? true
------------------------------------------------------------------
Level-Ordered Tree - 28,7,67,3,16,31,83,23,42,89
Pre-Ordered Tree - 28,7,3,16,23,67,31,42,83,89
Post-Ordered Tree - 3,23,16,7,42,31,89,83,67,28
In-Ordered Tree - 3,7,16,23,28,31,42,67,83,89
------------------------------------------------------------------
|         ┌── 89
|      ┌── 83
|   ┌── 67
|   |   |   ┌── 42
|   |   └── 31
└── 28
   |      ┌── 23
   |   ┌── 16
   |   |   └── 15
   └── 7
      └── 3
node found for 15 - {"data":15,"left":null,"right":null}
|         ┌── 89
|      ┌── 83
|   ┌── 67
|   |   |   ┌── 42
|   |   └── 31
└── 28
   |      ┌── 23
   |   ┌── 16
   └── 7
      └── 3
node 15 is deleted!
------------------------------------------------------------------
*/


export default driver;