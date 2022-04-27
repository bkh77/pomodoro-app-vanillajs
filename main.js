window.addEventListener("DOMContentLoaded", () => {
  let start = document.getElementById("start");
  let pause = document.getElementById("pause");
  let reset = document.getElementById("reset");

  let workMin = document.getElementById("work-minutes");
  let workSec = document.getElementById("work-seconds");
  let shortMin = document.getElementById("short-minutes");
  let shortSec = document.getElementById("short-seconds");
  let longMin = document.getElementById("long-minutes");
  let longSec = document.getElementById("long-seconds");
  let cycle = document.getElementById("cycle");

  let settingIcon = document.getElementById("setting-icon");
  let workInput = document.getElementById("work-input");
  let shortInput = document.getElementById("short-input");
  let longInput = document.getElementById("long-input");
  let setting = document.getElementById("setting");
  let okBtn = document.querySelector(".setBtn");


  function toggleHide() {
    if (setting.style.display === "none" || undefined) {
      setting.style.display = "block";
    } else {
      setting.style.display = "none";
    }
  }

  okBtn.addEventListener("click", () => {
    toggleHide();
    workMin.innerHTML = workInput.value;
    shortMin.innerHTML = shortInput.value;
    longMin.innerHTML = longInput.value;
  });

  settingIcon.addEventListener("click", () => {
    toggleHide();
  });

  var startTimer;

  function stopInterval() {
    clearInterval(startTimer);
  }

  start.addEventListener("click", () => {
    if (startTimer == undefined) {
      startTimer = setInterval(timer, 1000);
    } else {
      alert("Timer is already running!");
    }
  });

  reset.addEventListener("click", () => {
    let result = confirm('This will stop time and return it to its original state')
    if (result) {
      workMin.innerHTML = workInput.value;
      workSec.innerHTML = "00";
      shortMin.innerHTML = shortInput.value;
      shortSec.innerHTML = "00";
      longMin.innerHTML = longInput.value;
      longSec.innerHTML == "00";

      cycle.innerHTML = 0;
      stopInterval();
      startTimer = undefined;
    }
  });

  pause.addEventListener("click", () => {
    stopInterval();
    startTimer = undefined;
  });

  function timer() {
    if (cycle.innerHTML == 4) {
      if (longSec.innerHTML != 0) {
        longSec.innerHTML--;
      } else if (longMin.innerHTML != 0 && longSec.innerHTML == 0) {
        longMin.innerHTML--;
        longSec.innerHTML = 59;
      }

      if (longMin.innerHTML == 0 && longSec.innerHTML == 0) {
        cycle.innerHTML = 0;
        longMin.innerHTML = longInput.value;
        longSec.innerHTML = "00";
      }
    } else {
      if (workSec.innerHTML != 0) {
        workSec.innerHTML--;
      } else if (workMin.innerHTML != 0 && workSec.innerHTML == 0) {
        workSec.innerHTML = 59;
        workMin.innerHTML--;
      }

      if (workMin.innerHTML == 0 && workSec.innerHTML == 0) {
        if (shortSec.innerHTML != 0) {
          shortSec.innerHTML--;
        } else if (shortMin.innerHTML != 0 && shortSec.innerHTML == 0) {
          shortSec.innerHTML = 59;
          shortMin.innerHTML--;
        }
      }

      if (
        workMin.innerHTML == 0 &&
        workSec.innerHTML == 0 &&
        shortMin.innerHTML == 0 &&
        shortSec.innerHTML == 0
      ) {
        workMin.innerHTML = workInput.value;
        workSec.innerHTML = "00";
        shortMin.innerHTML = shortInput.value;
        shortSec.innerHTML = "00";

        cycle.innerHTML++;
      }
    }
  }
});