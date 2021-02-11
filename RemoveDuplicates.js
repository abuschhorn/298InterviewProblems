/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // for loop to iterate through
    
    for (let i=0; i < nums.length-1; i++) {
        if (nums[i] == nums[i+1]) {
            nums.splice(i+1, 1)
            i--
        }
    }
    // check next element is the same
    //   if so splice and descrement i in case there are multiple duplicates
    //   if not keep going
    return nums.length
};