var colorButton = $("#colorButton")[0];
var colorsBlocks = $("#colors")[0];
var colors_Num = (colorsBlocks.childNodes.length-1)/2;

var r, g, b, a;
var colorResult;

var clickCount = 0;

var testClickCount = 0;
var imageButton = $("#imageButton")[0];
var royImage = $("#roy")[0];

colorButton.onclick = function()
{
  clickCount++;
  for(let i = 0; i < colors_Num; i++)
  {
    getRandomColor(i);
  }
  console.log("clickCount: " + clickCount);
}

//Add event listener to the test imageButton to change image every time you click it
imageButton.onclick = function()
{
  changeImage();
}

//Add event listeners to all color blocks TEST!!!

// First solution - For loop
// for(let i = 1; i <= 5; i++)
// {
//   var colorId = "#color" + i.toString();
//   console.log("colorId before adding event listener: " + colorId);
//   $(colorId).click(function(){
//     copyColor(colorId);
//     console.log("colorId after adding event listener: " + colorId);
//   });
//   //debugger;
// }

//Second solustion, repeate the same function for 5 times

$("#color1").click(function(){
  copyColor("#color1");
});

$("#color2").click(function(){
  copyColor("#color2");
});

$("#color3").click(function(){
  copyColor("#color3");
});

$("#color4").click(function(){
  copyColor("#color4");
});

$("#color5").click(function(){
  copyColor("#color5");
});

function copyColor(colorId)
{
  var colorInfo = $(colorId)[0].style.backgroundColor;
  // Copy the text inside the text field
  navigator.clipboard.writeText(colorInfo);
  // Alert the copied text
  if(colorInfo.length != 0)
  {
    console.log("Copied the color: " + colorInfo);
  }
}

//Generate random colors as the background color
function getRandomColor(x)
{
  //Generate colors
  colorResult = "rgba(";
  for(let i = 0; i < 4; i++)
  {
    if(i < 3)
    {
      colorResult += Math.floor(Math.random() * 256).toString();
      colorResult += ", "
    }
    else
    {
      colorResult += (Math.random() * 0.9 + 0.1).toString();
      colorResult += ")"
    }
  }
  colorsBlocks.childNodes[2*x+1].style.backgroundColor = colorResult;
  console.log("colorResult: " + colorResult);
  return;
}

//It's just a test function for changing image
function changeImage()
{
  testClickCount++;
  if(testClickCount % 2 == 0)
  {
    royImage.src = "img/roy temp hap.png";
  }
  else
  {
    royImage.src = "img/roy temp sad.png";
  }
}
