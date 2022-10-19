/*
 * Author: Wang Liao
 * Created: 18 October
 * License: Public Domain
 */

// Define Variables
myTransport = ["Walking", "Bus", "Uber"];

myMainRide =
{
  make: "Tesla",
  model: "Model 3",
  color: "White",
  year: "2019",
  age: function(){return 2022 - year}
};

//Output
document.writeln("Kinds of transportation I use recently: ", myTransport, "</br>");
document.writeln("My imagined main ride: <pre>", JSON.stringify(myMainRide, null, "\t"), "</pre>");
