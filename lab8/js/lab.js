/*
 * Author: Wang Liao
 * Created: 26 October
 * License: Public Domain
 */

/*
//Define arraies for test
var a = [2, 5, 47, 325, 9];
var a2 = [13, 74, 9394, 2, 10];
var combinedArray = [];
var outputEl = document.getElementById("output");

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
  return "This is the mixed array: " + combinedArray;
}

function displayResult(str1, str2, displayedFunction)
{
  return outputEl.innerHTML = str1 +"<br><br>"+ str2 +"<br><br>"+ "It's the result of trying to write a function with call back: "+ displayedFunction;
}
*/
//--------------------------------------------------------------------
var userName = window.prompt("Please tell me your name.");
var outputEl = document.getElementById("output");

function greet(name, myFunction) {
    console.log('Welcome to my Lab 8 page.');

    // callback function
    // executed only after the greet() is executed
    myFunction(name);
}

// callback function
function sayName(name) {
    console.log('Hello' + ' ' + name);
    outputEl.innerHTML = "Welcome to my Lab 8 page." + "<br>" + 'Hello' + ' ' + name
}

// calling the function after 2 seconds
setTimeout(greet, 2000, userName, sayName);

//------------------------------------------------------------------------

/*
//Use console for debugging
var outputStr1 = "The sqrt of all elements in a: " + a.map(getSqrt);
console.log("outputStr1: ", outputStr1);
var outputStr2 = "Double all the elements in a2: " + a2.map(getDouble);
console.log("outputStr2: ", outputStr2);

//Display the calculation results in HTML

displayResult(outputStr1, outputStr2, mixArraies(a, a2));
*/
