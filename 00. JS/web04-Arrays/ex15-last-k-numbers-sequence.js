function printNums(n, k) {
    let nums = [1,];
    for (let i = 1; i < n; i++) {
        if (nums.length >= k) {
            let newNums = nums.slice(i - k, i)
            let number = 0;
            newNums.forEach((el) => number += el)
            nums.push(number);
        } else {
            nums.push(nums[i - 1] + i - 1);
        }
    }
    console.log(nums);
}

// printNums(6, 3);
printNums(8, 2);
printNums(9, 4);