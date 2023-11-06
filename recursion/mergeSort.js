//recursive function
const mergeSort = (arr) => {
    if(arr.length <= 1)
        return arr;
    const length = Math.floor(arr.length / 2);
    let left = [];
    let right = [];
    for(let i = 0; i < length; i++)
        left.push(arr[i]); //can be replaced with arr.slice(0, length)
    for(let j = length; j < arr.length; j++)
        right.push(arr[j]); //can be replaced with arr.slice(length)
    return merge(mergeSort(left), mergeSort(right));
}

//helper function
const merge = (left, right) => {
    const sorted = [];
    let leftIndex = 0;
    let rightIndex = 0;

    if(left && right) {
        console.log(`left array: ${left}`);
        console.log(`right array: ${right}`);
        while(leftIndex < left.length && rightIndex < right.length) {
            if(left[leftIndex] < right[rightIndex]) {
                console.log(`${left[leftIndex]} < ${right[rightIndex]}`);
                sorted.push(left[leftIndex]);
                console.log(`yes -> ${sorted}`);
                leftIndex++;
            }
            else {
                sorted.push(right[rightIndex]);
                console.log(`no -> ${sorted}`);
                rightIndex++;
            }
        }

        while(leftIndex < left.length) {
            sorted.push(left[leftIndex]);
            leftIndex++;
        } //36 - can be replaced with sorted.push(...left.slice(leftIndex))

        while(rightIndex < right.length) {
            sorted.push(right[rightIndex]);
            rightIndex++;
        } //41 - can be replaced with sorted.push(...right.slice(rightIndex))
    }
    console.log(`sorted: ${sorted}`);
    return sorted; //can be replaced with single line without 36 & 41 as return [...sorted, ...left.slice(leftIndex), ...right(rightIndex)]
}

console.log(mergeSort([3,6,1,2,9,4,8,5,7]));