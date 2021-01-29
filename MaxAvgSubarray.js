// naive solution/how I first solved it
// runtime O(n^2)

var findMaxAverage = function(nums, k) {
    // temp variable that stores current average of k length elements in list
    let temp = -10000;
    let tempTotal = 0;
    // for loop that iterates over list and adds k elements and comapres to temp
    for(let i=0; i<=nums.length-k; i++) {
        tempTotal = 0;
        for(let j = i; j < i+k ; j++){
            tempTotal += nums[j];
        }
        if (tempTotal/k > temp) {
            temp = tempTotal/k;
        }
    }
    return temp
};

// more efficient solution
// runtime O(n)

var findMaxAverage2 = function(nums, k) {
    let sum = 0;
    for(let i =0; i < k; i++) {
        sum += nums[i]
    }
    let max = sum;
    for(let j = k; j < nums.length; j++) {
        sum += nums[j] - nums[j-k];
        if(max < sum) max=sum;
    }
    return max/k;
};