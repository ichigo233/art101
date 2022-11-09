/*
 * Author: Wang Liao
 * Created: 9 November
 * License: Public Domain
 */

//A funtion that return a hosue name based on parameter's length
function sortingHat(str)
{
  console.log(str);
  var mod = str.length % 4;

  return houseArray[mod];
}

//Find the element
//Get the button
var submitButton = $("#button");
var houseArray = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];

//Add event listener to the button
$("#button").click(function(){

  //Get the user's name and get the house result
  var userName = $("#input")[0].value;
  var houseName = sortingHat(userName);
  var outputText = "<p>Now you are sorted into " + houseName +". </p>";

  //Add the result text to the output div
  $("#output")[0].innerHTML = outputText;
});
