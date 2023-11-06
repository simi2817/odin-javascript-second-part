
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

const merge = (left, right) => {
    const sorted = [];
    let leftIndex = 0;
    let rightIndex = 0;

    if(left && right) {
        while(leftIndex < left.length && rightIndex < right.length) {
            if(left[leftIndex] < right[rightIndex]) {
                sorted.push(left[leftIndex]);
                leftIndex++;
            }
            else {
                sorted.push(right[rightIndex]);
                rightIndex++;
            }
        }

        while(leftIndex < left.length) {
            sorted.push(left[leftIndex]);
            leftIndex++;
        } //can be replaced with sorted.push(...left.slice(leftIndex))

        while(rightIndex < right.length) {
            sorted.push(right[rightIndex]);
            rightIndex++;
        } //can be replaced with sorted.push(...right.slice(rightIndex))
    }
    return sorted;
}

console.log(mergeSort([3,6,1,2,9,4,8,5,7]));