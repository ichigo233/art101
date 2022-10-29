/*
 * Author: Wang Liao
 * Created: 29 October
 * License: Public Domain
 */

//Define variables to find the output element and create the new elements that will be added to the output div.
var outputEl = document.getElementById("output");

var new1El = document.createElement("p");
var new2El = document.createElement("p");

var count = 0;

new1El.innerText = "Hello! My name is new1El, a paragraph.";
new2El.innerHTML = "Hey. I'm new2El, a brand new paragraph.";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//taskX experiments

//Define two unodered lists

var ul1 = document.createElement("ul");
var ul2 = document.createElement("ul");

//Add some platforms to the lists

ul1.innerHTML ="<li>Nintendo Switch</li> <li>Playstation 5</li>";
ul2.innerHTML ="<li>PC</li> <li>Xbox Series X/S</li>";

outputEl.appendChild(ul1);
outputEl.appendChild(ul2);

//Create a button that insert the last element from the second list to the first list as its first element

var outputButton = document.getElementById("moveElementButton");
outputButton.onclick = function()
{
  if(count < 2)
  {
    console.log(ul1.children);
    count++;
    ul1.insertBefore(ul2.lastElementChild, ul1.children[0]);
  }
}

function MoveElement()
{
  ul1.insertBefore(ul2.lastElementChild, ul1[0]);
}
