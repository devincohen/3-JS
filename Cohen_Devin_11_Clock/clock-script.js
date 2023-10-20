var seconds = document.querySelector("#seconds");
var minutes = document.querySelector("#minutes");
var hour = document.querySelector("#hour");
var date = new Date();


function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}
    
setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    seconds.style.transform = 'rotate(' + (6 * ((time%3600)%60) + 180) + 'deg)';
    minutes.style.transform = 'rotate(' + (6 * ((time%3600)/60) + 180) + 'deg)';
    hour.style.transform = 'rotate(' + (30 * ((time/3600)-12) + 180) + 'deg)';    
}, 1000);
