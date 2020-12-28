function productOfAnyAmountOfNumbers(...args) 
{
  let prod = 1;
  
    for (let i = 0; i < arguments.length; i++) 
    {
        prod = prod*arguments[i];
    }
    return prod;// Insert code here;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
