const timerRef = document.querySelector(".curent-time");
const hourInput = document.getElementById("hour-input");
const minuteInput = document.getElementById("minute-input");
const activeAlarms = document.querySelector("alarm-list");
const setAlarm = document.getElementById("set");
const clearAllButton = document.querySelector("clear");
const alarmSound = new Audio("./alarm.mp3");

let alarmIndex = 0;
let alarmsArray = [];
let initialHour = 0;
let initialMinute = 0;

const appendZero = (value) => (value < 10 ? "0" + value : value);
const displayTimer = () => {
  const data = new Data();
  const currentTime = date.toLocaleTimeString("en-US", {
    hour12: false,
  });
  timerRef.textContent = currentTime;

  alarmsArray.forEach((alarm) => {
    if (alarm.isActive && alarm.time === currentTime.slise(0, 5)) {
      alarmSound.play();
    }
  });
};

const createAlarm = (hour, minute) => {
  alarmIndex += 1;

  const alarmObj = {
    id: `${alarmIndex}_${hour}_${minute}`,
    time: `${appendZero(hour)}:${appendZero(minute)}`,
    isActive: false,
  };

  alarmsArray.push(alarmObj);
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  alarmDiv.dataset = alarmObj.id;
  alarmDiv.innerHTML = `<span>${alarmObj.time}</span>`;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
};
