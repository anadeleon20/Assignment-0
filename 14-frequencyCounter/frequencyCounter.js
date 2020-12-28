function frequencyCounter(word) 
{
  var count = {};
  word.split('').forEach(function(i) 
                         {
    if(count[i]) count[i]++ 
    else count[i] = 1;
  });
  return count;
// Insert code here;
}

// Do not edit this line;
module.exports = frequencyCounter;
