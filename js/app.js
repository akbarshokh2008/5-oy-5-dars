let vaqt = prompt("Vaqt kiriting minutda:");
const btn = document.querySelector("#button");
const btn2 = document.querySelector("#button2");
let title = document.querySelector("#title");
let minute = vaqt;
let seconds = 0;
let soat = Math.floor(vaqt / 60);
btn.addEventListener("click", () => {
  const interval = setInterval(() => {
    seconds += 1;
    if (seconds == 60) {
      seconds = 0;
      minute -= 1;
      if (minute < 0) {
        minute = 59;
        soat -= 1;
      }
    }
    if (soat < 0) {
      clearInterval(interval);
      alert("Taymer tugadi!");
    }
    title.textContent = `${soat < 10 ? `0${soat}` : soat}:${
      minute < 10 ? `0${minute}` : minute - soat * 60
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
  }, 100);

  btn2.addEventListener("click", () => {
    clearInterval(interval);
  });
});
