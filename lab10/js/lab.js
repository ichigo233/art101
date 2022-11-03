/*
 * Author: Wang Liao
 * Created: 2 November
 * License: Public Domain
 */

var inputButton = document.getElementById("inputButton");
var extraButton = document.getElementById("extraButton");
var extraInputs = document.getElementsByClassName("extraInput");

console.log(extraInputs);

inputButton.addEventListener("click", function() {
  var name = document.getElementById("user-name").value;
  if(name != null)
  {
    console.log(name);
    var anagramResult = anagramGenerator(name);
    document.getElementById("output").innerHTML = "Here is an anagram: " + anagramResult;
  }
  return;
})

extraButton.addEventListener("click", function() {
  console.log(extraInputs.length);
  for(let i = 0; i < extraInputs.length; i++)
  {
    console.log(extraInputs[i]);
    console.log(extraInputs[i].value.length);
    if(extraInputs[i].value.length != 0)
    {
      var tempChild = document.createElement("p");
      tempChild.innerHTML = extraInputs[i].value;
      if(i != extraInputs.length - 1)
      {
        tempChild.innerHTML += "<br>";
      }
      document.getElementById("output").appendChild(tempChild);
    }
  }
})

function anagramGenerator(userName)
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

//A function that shuffles an array
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
