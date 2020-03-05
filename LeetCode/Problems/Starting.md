1. Two Sum Problem

Submissions - https://leetcode.com/problems/two-sum/submissions/
```
var twoSum = function(nums, target) {
    var complementKVP = new Map();
    for(var i=0;i<nums.length ;i++)
        {
         if( complementKVP.has(nums[i])) 
            return [complementKVP.get(nums[i]), i];
        else 
            complementKVP.set(target - nums[i], i);
        }
         
    return;
};
```
