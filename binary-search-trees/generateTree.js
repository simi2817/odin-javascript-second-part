import Node from "./node.js";

const generateTree = (array, start, end) => {

    if(start > end)
        return null;

    const mid = Math.floor((start + end) / 2);
    const node = new Node(array[mid]);
    
    node.left = generateTree(array, start, mid-1);
    node.right = generateTree(array, mid+1, end);
    return node;
}

export default generateTree;