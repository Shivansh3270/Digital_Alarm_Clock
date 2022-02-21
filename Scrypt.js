updateTime();
updatedate();
var audio = new Audio('https://onlinealarmkur.com/dist/mp3/clock.mp3');
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

function updatedate(){
    var getate = new Date();
    var a = getate.getDate();
    var b = getate.getMonth()+1;
    var c = getate.getFullYear();
    var d = getate.getDay();

    
    document.getElementById('date').innerHTML = a;
    document.getElementById('month').innerHTML = b;
    document.getElementById('year').innerHTML = c;
    document.getElementById('day').innerHTML = d;
    
    if(d == 1){
        day.innerHTML = 'Monday';
    }
    else if(d == 2){
        day.innerHTML = 'Tuesday';
    }
    else if(d == 3){
        day.innerHTML = 'Wednesday';
    }
    else if(d == 4){
        day.innerHTML = 'Thursday';
    }
    else if(d == 5){
        day.innerHTML = 'Friday';
    }
    else if(d == 6){
        day.innerHTML = 'Saturday';
    }
    else {
        day.innerHTML = 'Sunday';
    }
    
}

function updateTime() {
   var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}


function setAlarmTime(value) {
    alarmTime = value;
}

function setAlarm() {
    if(alarmTime) {
        var current = new Date();
        var timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            var timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);
            alert('Alarm set');
        }
    }
}

function clearAlarm() {
    if (alarmTimeout) {
        audio.pause();
        clearTimeout(alarmTimeout);
        alert('Alarm cleared');
    }
}
setInterval(updatedate, 1000);
setInterval(updateTime, 1000);