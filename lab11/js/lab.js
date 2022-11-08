/*
 * Author: Wang Liao
 * Created: 7 November
 * License: Public Domain
 */

//Add three buttons to for challenge, problems and results
$("#challengeDiv").append("<button id = 'challengeButtonEl'>Challenge Button");
$("#problemDiv").append("<button id = 'problemButtonEl'>Problem Button");
$("#resultDiv").append("<button id = 'resultButtonEl'>Result Button");

//Add event listeners to all three buttons
$("#challengeButtonEl").click(function(){
  $("#challengeDiv").toggleClass("special");
});

$("#problemButtonEl").click(function(){
  $("#problemDiv").toggleClass("special");
});

$("#resultButtonEl").click(function(){
  $("#resultDiv").toggleClass("special");
});


//Task X codes

//Add a header for Task X section
$(".bodyParagraphs").append("<h2>Task X</h2>");

//Create two buttons to toggle with
$(".bodyParagraphs").append("<button id = 'colorButton1'>Click me to change  the second button color!");

$(".bodyParagraphs").append("<br><br>");

$(".bodyParagraphs").append("<button id = 'colorButton2'>Click me to change the first button color!");

//Add event listeners to these two buttons
$("#colorButton1").click(function(){
  $("#colorButton2").toggleClass("toggledButton");
});

$("#colorButton2").click(function(){
  $("#colorButton1").toggleClass("toggledButton");
});
