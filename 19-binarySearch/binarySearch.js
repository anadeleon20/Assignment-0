class MySolution 
{
  constructor() 
  {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) 
  {
    let start = 0, end = nums.length-1;
    while(start <= end)
    {
      let mid = Math.floor((start+end)/2);
      if (nums[mid] == target)
        
	    return true;
      
      else if (nums[mid] < target)
         start = mid + 1;
      else end = mid - 1;
    }
    
    return false;// Insert code here;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
