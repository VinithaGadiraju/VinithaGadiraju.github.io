/* This file intentionally left blank. */
var downX = 0;
var downY = 0;

$("#gestureArea").dblclick(function(){
  $("#gestureResult").text("double click");
});

$( "#gestureArea" ).mousedown(function(event) {
   $("#gestureResult").text("mouse down");
   downX = event.pageX;
   downY = event.pageY;
});

$( "#gestureArea" ).mouseup(function(event) {
   var upX = event.pageX;
   var upY = event.pageY;
   if  (upX < downX) {
   		if (upY < downY) {
   			$("#gestureResult").text("swipe left \n swipe up");
   		}
   		else if (upY > downY) {
   			$("#gestureResult").text("swipe left \n swipe down");
   		}
   		else if (upY == downY) {
   			$("#gestureResult").text("swipe left");
   		}
   }
   else if (upX > downX) {
   	if (upY < downY) {
   			$("#gestureResult").text("swipe right \n swipe up");
   		}
   		else if (upY > downY) {
   			$("#gestureResult").text("swipe right \n swipe down");
   		}
   		else if (upY == downY) {
   			$("#gestureResult").text("swipe right");
   		}
   }
   else if (upX == downX) {
   	if (upY < downY) {
   			$("#gestureResult").text("swipe up");
   		}
   		else if (upY > downY) {
   			$("#gestureResult").text("swipe down");
   		}
   		else if (upY == downY) {
   			$("#gestureResult").text("mouse up");
   		}
   }
});

