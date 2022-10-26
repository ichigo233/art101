/*
 * Author: Wang Liao
 * Created: 26 October
 * License: Public Domain
 */

//Define arraies for test
var a = [2, 5, 47, 325, 9];
var a2 = [13, 74, 9394, 2, 10];
var combinedArray = [];

//Define functions to do some calculation
function getSqrt(x)
{
  return Math.sqrt(x);
}

function getDouble(x)
{
  return x * 2;
}

function mixArraies(array1, array2)
{
  if(array1.length == array2.length)
  {
    for(let i = 0; i < array1.length; i++)
    {
      combinedArray.push(array1[i] + (array2[i]));
    }
  }
  else
  {
    console.log("The lengths of two arraies are different!");
    return "Please check the lengths of the arraies!";
  }
  return combinedArray;
}

function displayResult(displayedFunction)
{
  return "It's the result of trying to write a function with call back: "+ displayedFunction;
}

//Use console for debugging
console.log("The sqrt of all elements in a: ", a.map(getSqrt));
console.log("Double all the elements in a2: ", a2.map(getDouble));
console.log(displayResult(mixArraies(a, a2)));

//Display the calculation results in HTML
var outputEl = document.getElementById("output");

outputEl.innerHTML = "The sqrt of all elements in a: " + a.map(getSqrt)+ "<br><br>" + "Double all the elements in a2: " + a2.map(getDouble) + "<br><br>" + displayResult(mixArraies(a, a2));
