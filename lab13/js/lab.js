/*
 * Author: Wang Liao
 * Created: 13 November
 * License: Public Domain
 */

function FizzBuzz()
{
  for(let i = 1; i < 201; i++)
  {
    var str = "";

    if(i % 3 == 0)
    {
      str += "Fizz";
    }

    if(i % 5 == 0)
    {
      str += "Buzz";
    }

    if(i % 7 == 0)
    {
      str += "Boom";
    }

    if(str != "")
    {
      console.log(str + "!");
      $("#output").append("<p>" + str + "</p>");
    }
    else
    {
      console.log(i);
      $("#output").append("<p>" + i.toString() + "</p>");
    }
  }
}

//FizzBuzz();

//---------Task X Test-------------

//Use a bool to know if it's the first time pressing setButton. Because it needs to add some <br> after the first time.
var firstClick = true;

//Add event listener to setButton. Every time pressing the button, it will add two input fields to outputSetting div. The first one input is the index, the second one is the corresponding text.

$("#setButton").click(function(){
  if(firstClick)
  {
    $("#outputSetting").append("<input type = 'text' class = 'index'>");
    firstClick = false;
  }
  else
  {
    $("#outputSetting").append("<br><br><input type = 'text' class = 'index'>");
  }
  $("#outputSetting").append("<input type = 'text' class = 'indexText'>");
  //console.log($(".index"));
});

//Add event listener to runButton
$("#runButton").click(function(){
  var indexArray = [];
  var indexTextArray = [];

  $("#output").empty();

  for(let i = 0; i < $(".index").length; i++)
  {
    if($(".index")[i].value % 1 == 0 && $(".indexText")[i].value != "")
    {
      indexArray.push($(".index")[i].value);
      indexTextArray.push($(".indexText")[i].value);
    }
  }

  if($("#loopNum")[0].value > 0)
  {
    for(let i = 1; i <= $("#loopNum")[0].value; i++)
    {
      var str = "";

      for(let j = 0; j < indexArray.length; j++)
      {
        if(i % indexArray[j] == 0)
        {
          str += indexTextArray[j];
        }
      }

      if(str != "")
      {
        str += "!";
      }
      $("#output").append("<p> " + i + ": " + str);
    }
  }
  else
  {
    console.log("Please enter a number greater than 0!")
  }
});
