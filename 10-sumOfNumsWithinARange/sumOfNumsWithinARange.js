function sumOfNumsWithinARange(nums, start, end)
{
  var count = 0;

  for (var i = 0; i < nums.length; i++)
  {
    if (start <= nums[i] && nums[i] <= end)
    {
      count++;
    }
  }
  
  return count;// Insert code here;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
