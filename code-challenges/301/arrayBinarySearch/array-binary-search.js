'use strict'

let binarySearch = module.exports = {};

binarySearch.search = (data, target) => {
    let start = 0;
    let end = data.length-1;
    let middle = Math.floor((data.length)/2);
    if (target > data[end] || target < data[start]){
        return -1;
    }
    if (target === data[middle]){ return middle}
    while (target !== data[middle]){
        if (target < data[middle]){
            end = middle-1;
            console.log(end);
        } else {
            start = middle+1;
            console.log(start);
        }
        middle = Math.floor((start+end)/2);
        console.log(middle);
    }
    return middle;
}