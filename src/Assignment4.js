function twoSums(nums,target){
    const map={};
    for (let i=0;i<nums.length;i++){
        const complement=target-nums[i];
        //complement=10-2=8;
        if(map.hasOwnProperty(complement)){
            return [map[complement],i];
        }
        map[nums[i]]=i;
    }
    return [];
}

console.log(twoSums([9,8,2,10], 10));  
console.log(twoSums([3, 2, 4], 6));      
console.log(twoSums([3, 3], 6));    
