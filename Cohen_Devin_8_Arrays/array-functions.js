function alwaysHungry(arr){
    var foods = 0;
    var yummies = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]==="food") {
            foods++;
            yummies+= "yummy, "
        }
    }

    if (foods > 0){
        console.log(yummies);
    }
    else {
        console.log("I'm hungry");
    }
}

function highPass(arr, cutOff){
    var filteredArray = [];
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > cutOff){
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

function betterThanAverage(arr){
    var sum = 0;
    var count = 0;
    for(let i = 0; i<arr.length; i++){
        sum+=arr[i];
    }
    var avg=sum/arr.length;
    for(let i = 0; i<arr.length; i++){
        if (arr[i]>avg){
            count++;
        }
    }
    return count;
}

function reverse (arr) {
    var rev = [];
    for (let i = arr.length-1; i >= 0; i--) {
        rev.push(arr[i]);
    }
    return rev;
}

function fibonacciArray(n){
    var fibArr = [0,1];
    for (let i = 1; i <= n-2 ; i++) {
        fibArr.push(fibArr[i-1]+fibArr[i]);
    }
    return fibArr;
}

console.log(fibonacciArray(10));