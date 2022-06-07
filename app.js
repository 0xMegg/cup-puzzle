const aCup = document.body.querySelector("#a");
const bCup = document.body.querySelector("#b");
const cCup = document.body.querySelector("#c");
const cycleCount = document.body.querySelector("#cycleCount");
const reset = document.body.querySelector("#reset");

let first = "";
let clickCount = 0;

const CLICK_KEY = "clicked";

function clickHandler(e) {
  if (!e.path[0].classList.value) {
    e.path[0].classList.add(CLICK_KEY);
    if (clickCount == 0) {
      clickCount++;
      first = e.path[0].id;
    } else {
      clickCount = 0;
      if (e.path[0].innerText == "▲") {
        e.path[0].innerText = "▼";
      } else {
        e.path[0].innerText = "▲";
      }
      const change = document.getElementById(first).innerText;
      if (change == "▲") {
        document.getElementById(first).innerText = "▼";
      } else {
        document.getElementById(first).innerText = "▲";
      }
      e.path[0].classList.remove(CLICK_KEY);
      document.getElementById(first).classList.remove(CLICK_KEY);
      first.innerText = "";
      cycleCount.innerText++;
    }
  } else {
    e.path[0].classList.remove(CLICK_KEY);
    clickCount--;
    first = "";
  }
}

aCup.addEventListener("click", clickHandler);
bCup.addEventListener("click", clickHandler);
cCup.addEventListener("click", clickHandler);
