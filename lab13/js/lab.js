/*
 * Author: Wang Liao
 * Created: 11 November
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
var inputNum = 0;
var tempId = "";
var addingButton = $("#button");

addingButton.click(function(){
  inputNum++;
  tempId += inputNum * 2
  $("#outputSetting").append("<input type = 'text' id = 'input' + 'rowNum'>");
  $("#outputSetting").append("<input type = 'text' id = 'input' + 'rowNum'>");

  $("#outputSetting").append("<br><br>");
});
