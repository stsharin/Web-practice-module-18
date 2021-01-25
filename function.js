function evenify(num){
    if (num%2==0){
        console.log(num, ": is even number");
    }
    else{
        console.log(num*2, ": is odd number");
    }
}

function evenify_all(nums){
    for (var i =0; i<nums.length;i++){
        const num = nums[i];
        evenify(num);
    }
}

nums = [5,12, 89, 45, 18, 8];
evenify_all(nums);

friendsAge = [13, 17, 20, 15, 25, 30, 26];
evenify_all(friendsAge);