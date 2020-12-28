function titleCaseEdit(title) 
{
  
  var newTitle = title.split (' ');
  
  for(var i=0;i<newTitle.length;i++)
    {
      newTitle[i]= newTitle[i].charAt(0).toUpperCase() + newTitle[i].substring(1);
    }
   
  return newTitle.join(' ');

                                     // Insert code here;
}

// Do not edit this line;
module.exports = titleCaseEdit;
