function isPalindrome(word) 
{
  for(let i = 0; i < word.length; i++)
  {
    if(word.charAt(i) != word.charAt(word.length - 1 - i))
    {
      return false;
    }
  }

  return true;// Insert code here;
}

// Do not edit this line;
module.exports = isPalindrome;
