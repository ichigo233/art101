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
  var ifSaySomethingNum = Math.floor(Math.random() * 10);
  if(ifSaySomethingNum < 8)
  {
    saySomething(clickCount);
  }

  console.log("clickCount: " + clickCount);
}

//Add event listener to all the colors. Copy the color info to the clipboard.
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

//Add event listener to the test imageButton to change image every time you click it
imageButton.onclick = function()
{
  changeImage();
  // changeMoodBackground();
}

// Change background depending on Roy's mood
/*function changeMoodBackground(x){
  document.body.style.background = x;
}
    if (clickCount < 6) {
      changeMoodBackground('yellow');
}
    else if (clickCount >= 6 && clickCount <= 12) {
      changeMoodBackground('blue');
    }
    else {
      changeMoodBackground('red');
    } */

//Generate random colors as the background color
function getRandomColor(x)
{
  //Clickcount & Change Roy image
  if(clickCount < 6)
  {
    //royImage.src = "img/roy temp hap.png";
  }
  else if(clickCount >= 6 && clickCount <= 12)
  {
    //royImage.src = "img/roy temp sad.png";
  }
  else
  {
    //royImage.src = "img/roy temp angy.png";
  }

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

//Copy the color to the clipboard
function copyColor(colorId)
{
  var colorInfo = $(colorId)[0].style.backgroundColor;
  // Copy the text inside the text field
  navigator.clipboard.writeText(colorInfo);
  // Print the copied color
  if(colorInfo.length != 0)
  {
    console.log("Copied the color: " + colorInfo);
  }
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

//---------Text Box Changing Test Area------------------
var speeds =
{
  slow: 120,
  normal: 700,
  fast: 300
}

var textLines =
{
  happyQuotes:[
    { string: "Roy Happy Quote 1", speed: speeds.normal},
    { string: "Roy Happy Quote 2", speed: speeds.slow},
    { string: "Roy Happy Quote 3", speed: speeds.fast}],
  frustratedQuotes: [
    { string: "Roy Frustrated Quote 1", speed: speeds.normal},
    { string: "Roy Frustrated Quote 2", speed: speeds.normal},
    { string: "Roy Frustrated Quote 3", speed: speeds.normal}],
  angryQuotes: [
    { string: "Roy angry Quote 1", speed: speeds.normal},
    { string: "Roy angry Quote 2", speed: speeds.normal},
    { string: "Roy angry Quote 3", speed: speeds.normal}],
}

function saySomething(clickCount)
{
  var randomQuote;
  if(clickCount < 6)
  {
    var randomNum = Math.floor(Math.random() * textLines.happyQuotes.length);
    randomQuote = textLines.happyQuotes[randomNum].string;
    $("#quote").html("<p>" + randomQuote);
    console.log(randomQuote);
  }
  else if(clickCount >= 6 && clickCount < 12)
  {
    var randomNum = Math.floor(Math.random() * textLines.frustratedQuotes.length);
    randomQuote = textLines.frustratedQuotes[randomNum].string;
    $("#quote").html("<p>" + randomQuote);
    console.log(randomQuote);
  }
  else //clickCount >= 12
  {
    var randomNum = Math.floor(Math.random() * textLines.angryQuotes.length);
    randomQuote = textLines.angryQuotes[randomNum].string;
    $("#quote").html("<p>" + randomQuote);
    console.log(randomQuote);
  }
}
