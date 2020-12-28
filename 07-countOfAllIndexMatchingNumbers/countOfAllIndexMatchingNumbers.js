function countOfAllIndexMatchingNumbers(nums) 
{
  let count = 0;
  
	for(let i = 0; i<nums.length; i++)
  {
		if (nums[i]==i)
			count ++;
	}

  return count;

  // Insert code here;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
