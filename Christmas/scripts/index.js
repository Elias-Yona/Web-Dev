let today = new Date();
let days, hours = (24 - today.getHours()), minutes = (60 - today.getMinutes()), seconds = (60 - today.getSeconds());
arrTotalDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

ttlDays();

function sec(){
    seconds--;
    document.getElementById("seconds").innerHTML = seconds;

    if (seconds == 0){
        minutes --;
        seconds = 60;
    }
    mins();
    hrs();
    dys();
}

setInterval(sec, 1000);

function mins(){
    if (minutes == 0){
        hours --;
        minutes = 60;
    }
    document.getElementById("minutes").innerHTML = minutes;
}

function hrs(){
    if (hours == 0){
        days --;
        hours = 24;
    }
    document.getElementById("hours").innerHTML = hours;
}

function dys(){

    if (days == 0){
        return "HO HO HO";
    }
    document.getElementById("days").innerHTML = days;
}

function ttlDays(){
    let currentMonth = today.getMonth();
    let accumulation = 0;
    let nxtMonth = currentMonth + 1;
    let difference;

    //console.log("Current Month: " + currentMonth);

    let ttl = arrTotalDays[currentMonth];

    if (currentMonth == 11)
    {
        difference = today.getDate();
    }else{
        difference = ttl - today.getDate();
    }
    
    //console.log("Difference is: " + difference);

    if (currentMonth < 11)
    {
        for (nxtMonth; nxtMonth < 12; nxtMonth ++)
        {
            accumulation += arrTotalDays[nxtMonth];
        }
        days = (difference + accumulation + 25) - 1;
    }else{
        days = 25 - difference - 1;
    }
    
    //console.log("Days is: " + days);
}

window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
  });
  