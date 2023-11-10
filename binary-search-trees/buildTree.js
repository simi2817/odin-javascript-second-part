import generateTree from './generateTree.js';

const buildTree = (array) => {
    const noDuplicates = Array.from(new Set(array));
    const sorted = noDuplicates.sort((a, b) => a - b);
    const start = 0;
    const end = sorted.length - 1;
    const root = generateTree(sorted, start, end);
    return root;
}

export default buildTree;