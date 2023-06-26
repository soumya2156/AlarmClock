currentTime = document.querySelector("h1");
selectTime = document.querySelectorAll("select");
setAlarmBtn = document.querySelector("button");
contentBody = document.querySelector(".time"); 

let alarmTime, isAlarmSet ;
let ringtone = new Audio("./ring2-mp3-6551.mp3");
 // Using JS to add select option
for (let i = 12; i >= 0; i--) {
    if(i < 10){
        i = "0" + i;
    }
    let option = `<option value="${i}">${i}</option>`;
    selectTime[0].firstElementChild.insertAdjacentHTML('afterend', option);
}

for (let i = 59; i >= 0; i--) {
    if(i < 10){
        i = "0" + i;
    }
    let option = `<option value="${i}">${i}</option>`;
    selectTime[1].firstElementChild.insertAdjacentHTML('afterend', option);
}

for (let i = 2; i > 0; i--) {
    let ampm;
    if(i == 1){
        ampm = "AM";
    }else{
        ampm = "PM";
    }
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectTime[2].firstElementChild.insertAdjacentHTML('afterend', option);
}
//Display time on screen
setInterval(() => {
    let date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s= date.getSeconds();
    ampm = "AM";
    if (h > 12){
        ampm = "PM"
    };
    h = h==0 ? h=12 : h;
    h = h>12 ? h=h-12 :h;
    h = h<10 ? "0"+h : h
    m = m<10 ? "0"+m : m
    s = s<10 ? "0"+s : s
    
    currentTime.innerText = `${h}:${m}:${s} ${ampm}`

    currentAlarmTime = `${h}:${m} ${ampm}`
    if(alarmTime == currentAlarmTime){
        ringtone.play();
        ringtone.loop = true;
    }
});

console.log(isAlarmSet);

//Adding alarm functionality
function setAlarm(){
    if (isAlarmSet){
        alarmTime = "";
        ringtone.pause();
        contentBody.classList.remove("disable");
        setAlarmBtn.innerText = "Set Alarm";
        return isAlarmSet=false;
        
    }

    console.log(isAlarmSet);

    let time = `${selectTime[0].value}:${selectTime[1].value} ${selectTime[2].value}`
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")){
        return alert("Please select correct time!!");
    }

    alarmTime = time;
    isAlarmSet = true;
    contentBody.classList.add("disable");
    setAlarmBtn.innerText = "Clear Alarm";
    console.log(isAlarmSet);
}


setAlarmBtn.addEventListener("click" , setAlarm);




