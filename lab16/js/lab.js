/*
 * Author: Wang Liao
 * Created: 27 November
 * License: Public Domain
 */

var preURL = "https://xkcd.com/";
var middleNum;
var afterURL = "/info.0.json";

var maxNum;

var finalURL = "https://xkcd.com/info.0.json";

 // Using the core $.ajax() method
 $.ajax({
     // The URL for the request (from the api docs)
     url: finalURL,
     // Whether this is a POST or GET request
     type: "GET",
     // The type of data we expect back
     dataType : "json",
     // What do we do when the api call is successful
     //   all the action goes in here
     success: function(data) {
       getAndPutData(data);
     },
     // What we do if the api call fails
     error: function (jqXHR, textStatus, errorThrown) {
         // do stuff
         console.log("Error:", textStatus, errorThrown);
     }
 })

 //-----------Task X Test----------------
 function getAndPutData(data)
 {
   console.log("data: ", data);
   if(middleNum == null)
   {
     middleNum = data.num;
     maxNum = middleNum;
     console.log("maxNum: " + maxNum);
   }
   console.log("Current num is: ", middleNum);

   $("#outputBlock").html("<h3>" + data.title);
   imageObj = $("<img>").attr({"src": data.img, "alt": data.alt});
   console.log("imageObj: ", imageObj[0]);
   $("#outputBlock").append(imageObj);
 }

 $("#previousButton").click(function(){
   if(middleNum <= maxNum && middleNum > 1)
   {
     middleNum--;
   }
   finalURL = preURL + middleNum.toString() + afterURL;
   $.ajax({
       // The URL for the request (from the api docs)
       url: finalURL,
       // Whether this is a POST or GET request
       type: "GET",
       // The type of data we expect back
       dataType : "json",
       // What do we do when the api call is successful
       //   all the action goes in here
       success: function(data) {
         getAndPutData(data);
       },
       // What we do if the api call fails
       error: function (jqXHR, textStatus, errorThrown) {
           // do stuff
           console.log("Error:", textStatus, errorThrown);
       }
   })
 });

 $("#nextButton").click(function(){
   if(middleNum < maxNum && middleNum > 1)
   {
     middleNum ++;
   }
   finalURL = preURL + middleNum.toString() + afterURL;
   $.ajax({
       // The URL for the request (from the api docs)
       url: finalURL,
       // Whether this is a POST or GET request
       type: "GET",
       // The type of data we expect back
       dataType : "json",
       // What do we do when the api call is successful
       //   all the action goes in here
       success: function(data) {
         getAndPutData(data);
       },
       // What we do if the api call fails
       error: function (jqXHR, textStatus, errorThrown) {
           // do stuff
           console.log("Error:", textStatus, errorThrown);
       }
   })
 });
