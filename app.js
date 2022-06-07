const aCup = document.body.querySelector("#a");
const bCup = document.body.querySelector("#b");
const cCup = document.body.querySelector("#c");
const first = document.body.querySelector("#first");
const clickCount = document.body.querySelector("#clickCount");
const cycleCount = document.body.querySelector("#cycleCount");

const CLICK_KEY = "clicked";

function clickHandler(e) {
  if (!e.path[0].classList.value) {
    e.path[0].classList.add(CLICK_KEY);
    if (clickCount.innerText == 0) {
      clickCount.innerText++;
      first.innerText = e.path[0].id;
    } else {
      clickCount.innerText = 0;
      if (e.path[0].innerText == "▲") {
        e.path[0].innerText = "▼";
      } else {
        e.path[0].innerText = "▲";
      }
      const firstElementValue = document.getElementById("first").innerText;
      const change = document.getElementById(firstElementValue).innerText;
      if (change == "▲") {
        document.getElementById(firstElementValue).innerText = "▼";
      } else {
        document.getElementById(firstElementValue).innerText = "▲";
      }
      e.path[0].classList.remove(CLICK_KEY);
      document.getElementById(firstElementValue).classList.remove(CLICK_KEY);
      first.innerText = "";
      cycleCount.innerText++;
    }
  } else {
    e.path[0].classList.remove(CLICK_KEY);
    clickCount.innerText--;
    first.innerText = "";
  }
}

aCup.addEventListener("click", clickHandler);
bCup.addEventListener("click", clickHandler);
cCup.addEventListener("click", clickHandler);
