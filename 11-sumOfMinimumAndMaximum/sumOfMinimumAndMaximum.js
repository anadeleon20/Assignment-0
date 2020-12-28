function sumOfMinimumAndMaximum(nums)
{
  let max = nums[0];
  let min = nums[0];
  
	for(let i = 0; i<nums.length; i++)
  {
		if (max < nums[i])
    {
			max = nums[i];
		}
    
		if (min > nums[i])
    {
		    min = nums[i];
		}
	}
return min + max;


// Insert code here;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
