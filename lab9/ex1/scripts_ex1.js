
var start = new Date();
function stopTime(){
  var stop = new Date();

  var time_on_page = (stop.getTime()-start.getTime())/600;
  time_on_page = time_on_page.toFixed(3)
  var info="You have been on the page for: "+time_on_page+" seconds";
  alert(info);
}
