/*
 * Author: Wang Liao
 * Created: 18 October
 * License: Public Domain
 */

var outputEl = document.getElementById("output");
var outputButton = document.getElementById("moveElementButton");
var colorsEl = document.getElementById("colors");
var colors_Num = (colorsEl.childNodes.length-1)/2;

var r, g, b, a;
var randomColor = [r, g, b, a];
var colorResult;

outputButton.onclick = function()
{
  /*
   *console.log("--------------------Phase 1--------------------");
   *console.log("colors: ", colorsEl);
   *console.log("childNodes: ", colorsEl.childNodes);
   *console.log("length: ", colorsEl.childNodes.length);
   *console.log("The number of colors = ", (colorsEl.childNodes.length-1)/2);

   *console.log("--------------------Phase 2--------------------");

   *console.log("First child is: ", colorsEl.childNodes[1], ". Let's change its background color!");
   *colorsEl.childNodes[1].style.backgroundColor = "blue";

   *console.log("Now let's try to change the color with number!");
   *colorsEl.childNodes[1].style.backgroundColor = "#ff0000ff";

  console.log("--------------------Phase 3--------------------");

  console.log("Finally, let's try change the color using a function!");
  getRandomColor();
  */

  console.log("--------------------Phase 4--------------------");

  console.log("Final test for all colors!")

  for(let i = 0; i < colors_Num; i++)
  {
    getRandomColor(i);
  }
}

function getRandomColor(x)
{
  colorResult = "#";
  for(let i = 0; i < randomColor.length; i++)
  {
    if(i != randomColor.length - 1)
    {
      randomColor[i] = Math.floor(Math.random() * 100);
    }
    else
    {
      randomColor[i] = Math.floor(Math.random() * 80 + 20);
    }

    if(randomColor[i] < 10)
    {
      colorResult += "0";
    }
    colorResult += randomColor[i].toString();
  }
  //console.log("randomColor: ", randomColor);

  console.log(colorResult);
  colorsEl.childNodes[2*x+1].style.backgroundColor = colorResult;
  return;
}
