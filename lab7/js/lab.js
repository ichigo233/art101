/*
 * Author: Wang Liao
 * Created: 24 October
 * License: Public Domain
 */

var userName = window.prompt("Hey. Please tell me your name and I'll sort all characters in order. \n\nPlus, I can give you an anagram based on your name if your name is longer than 2 characters!");

function sortUserName()
{
  console.log("-----sortUserName-----")
  //Get the userName
  console.log("userName = ", userName);

  //Split userName from string to array
  var nameArray = userName.split('');
  console.log("nameArray = ", nameArray);

  //Sort nameArray
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort = ", nameArraySort);

  //Join nameArraySort back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted = ", nameSorted);

  //Return the sorted name in string
  return nameSorted;
}

function anagramGenerator()
{
  console.log("-----Test-----")
  //Get the userName
  console.log("userName = ", userName);

  //Split userName from string to array
  var nameSeperateArray = userName.split(' ');
  console.log("nameSeperateArray = ", nameSeperateArray);

  //Create anagram array using nameSeperateArray
  for(let i = 0; i < nameSeperateArray.length; i++)
  {
    nameSeperateArray[i] = nameSeperateArray[i].split('');
    nameSeperateArray[i] = createAnagram(nameSeperateArray[i]).join('').toLowerCase();
    nameSeperateArray[i] = nameSeperateArray[i].charAt(0).toUpperCase() + nameSeperateArray[i].substring(1);
  }
  console.log("nameSeperateArray = ", nameSeperateArray);

  //Join nameSeperateArray back to a string

  var anagramString = nameSeperateArray.join(' ');
  console.log("anagramString = ", anagramString);

  //Return the result
  return anagramString;
}

function createAnagram(tempArray)
{
  var shuffledArray = [];
  for(let i = 0; i < tempArray.length; i++)
  {
    let index = parseInt(tempArray.length/2 + i);
    if(index >= tempArray.length)
    {
      index -= tempArray.length;
    }
    shuffledArray.push(tempArray[index]);
  }
  shuffledArray.reverse();
  return shuffledArray;
}

//Output
if(userName.length != 0)
{
  document.writeln("This is your sorted name: ", sortUserName(), "</br>");
  document.writeln("Here is the anagram: ", anagramGenerator(), "</br>", "The anagram is not extremely hard and try to solve it if you want!");
}
else
{
  document.writeln("Please don't leave your name blank :(");
}
