// LeetCode Link: https://leetcode.com/problems/reverse-integer/

// Using numerical method

var reverse = function(x) {
    let limit = Math.pow(2, 31) - 1
    let sign = x > 0 ? 1 : -1;
    x = Math.abs(x);
    let newNum = x%10;

    while(x>=10) {
        x = Math.floor(x / 10);
        newNum = newNum * 10 + (x % 10);
    }
    
    return newNum < limit ? sign*newNum : 0;
};

// Using string method

var reverse = function(x) {
    let stringX = x.toString()
    let hasDash = false
    let revX = ""
    
    for(let i = 0; i<stringX.length; i++){
        if(stringX[i]!="-"){
            revX = stringX[i] + revX
        }
        else {
            hasDash = true
        }
    }
    
    let output = parseInt(revX)
    if(hasDash){
        output*=-1
    }
    
    if ((revX < -Math.pow(2, 31)) || (revX > Math.pow(2, 31)-1)){
        return 0
    }
    return output
};

