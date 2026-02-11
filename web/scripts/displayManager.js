function overlayOff() {
  document.getElementById("overlay").style.display = "none";
}

async function displayCountDown(domObject, interval)
{
    const sleepCounterObject = document.getElementById("sleepcounter");
    sleepCounterObject.style.display = "block";

    var countDownDate = (new Date().getTime() + (interval*1000));
    // Update the count down every 1 second
    var time_countDown = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
        
    // Find the distance between now and the count down date
    var distance = (countDownDate) - now;
        
    // Time calculations for days, hours, minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    // Output the result in an element with id="demo"
    console.log(minutes + "m " + seconds + "s ");
    sleepCounterObject.innerHTML = minutes + "m " + seconds + "s ";
        
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(time_countDown);
        sleepCounterObject.style.display = "none";
        overlayOff();
    }
    }, 1000);
}
  