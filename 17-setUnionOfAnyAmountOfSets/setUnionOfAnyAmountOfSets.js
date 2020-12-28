function setUnionOfAnyAmountOfSets(...args) 
{
  
 let x = new Set();
  
  for (var i=0;i<args.length;i++)
  {
    for (var j of args[i])
    {
      x.add(j);
    }
  }
  console.log(x); // Insert code here;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
