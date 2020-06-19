function productOfArray(arr) {
    console.log(arr)

    if (arr.length === 0) {
        return [];
    };

    if (arr.length === 1) {
        return arr[0];
    };

    return arr.splice(0,1) * productOfArray(arr);
}

var test = [1,2,3,10];
console.log(productOfArray(test));