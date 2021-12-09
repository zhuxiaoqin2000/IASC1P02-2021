var index = 0
function ChangeImg()
{
        index++;
        var a=document.getElementsByClassName("img-slide1");
        if(index>=a.length) index=0;
        for(var i=0;i<a.length;i++){
            a[i].style.display='none';
        }
        a[index].style.display='block';
}

setInterval(ChangeImg,2000);

var start = new Date();
function stopTime(){
  var stop = new Date();

  var time_on_page = (stop.getTime()-start.getTime())/600;
  time_on_page = time_on_page.toFixed(3)
  var info="You have been on the page for: "+time_on_page+" seconds";
  alert(info);
}
