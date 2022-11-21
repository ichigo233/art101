/*
 * Author: Wang Liao
 * Created: 21 November
 * License: Public Domain
 */

var endpoint = "https://yesno.wtf/api";

function getAPIData() {
  console.log("Running getAPIData");
  // go to numbers.api for data using AJAX
  $.ajax({
    // API endpoint
    url: endpoint,
    // Any data to send
    // data: { id: 123},
    // POST or GET request
    type: "GET",
    // data type we expect back
    dataType : "json",
  })
  // If the request succeeds
  // data is passed back
  .done(function(data) {
    console.log("Success:", data);
    var imageURL = data.image;
    console.log("URL:", imageURL)
    imageObj = $("<img>").attr("src", imageURL);
    $("#outputBlock").html(imageObj);
    $("#outputBlock").append("<p>" + data.answer);
  })
  // If the request fails
  .fail(function(request,error) {
    console.log(request, error);
  });
}

$("#activate").click(getAPIData);

//Task X Test

var endpoint_NASA = "https://api.nasa.gov/planetary/apod?api_key=WKq0CK4E9r3dbx1Tk4IjOHbdOwQSQ5EcRzbFmkkc";

function getAPIData_NASA() {
  console.log("Running getAPIData");
  // go to numbers.api for data using AJAX
  $.ajax({
    // API endpoint
    url: endpoint_NASA,
    // Any data to send
    // data: { id: 123},
    // POST or GET request
    type: "GET",
    // data type we expect back
    dataType : "json",
  })
  // If the request succeeds
  // data is passed back
  .done(function(data) {
    console.log("Success:", data);
    var imageURL = data.url;
    console.log("URL:", imageURL)
    imageObj = $("<img>").attr("src", imageURL);
    $("#outputBlock").html(imageObj);
  })
  // If the request fails
  .fail(function(request,error) {
    console.log(request, error);
  });
}

$("#activate_NASA").click(getAPIData_NASA);
