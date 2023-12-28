/* Created by Tivotal */

let nums = document.querySelectorAll(".num");
let startBtn = document.querySelector(".startBtn");
let endBtn = document.querySelector(".endBtn");
let stepBtn = document.querySelectorAll(".stepBtn");

let initialStep = 0;

endBtn.addEventListener("click", () => {
  document.querySelector(".active").classList.remove("active");

  nums[4].classList.add("active");
  initialStep = 4;
  updateBtns();
});

startBtn.addEventListener("click", () => {
  document.querySelector(".active").classList.remove("active");

  nums[0].classList.add("active");
  initialStep = 0;
  updateBtns();
});

stepBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    initialStep += e.target.id === "next" ? 1 : -1;

    nums.forEach((num, index) => {
      num.classList.toggle("active", index === initialStep);
      updateBtns();
    });
  });
});

nums.forEach((num, index) => {
  num.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");

    num.classList.add("active");
    initialStep = index;
    updateBtns();
  });
});

function updateBtns() {
  if (initialStep === 4) {
    endBtn.disabled = true;
    startBtn.disabled = false;
    stepBtn[0].disabled = false;
    stepBtn[1].disabled = true;
  } else if (initialStep === 0) {
    endBtn.disabled = false;
    startBtn.disabled = true;
    stepBtn[0].disabled = true;
    stepBtn[1].disabled = false;
  } else {
    endBtn.disabled = false;
    startBtn.disabled = false;
    stepBtn[0].disabled = false;
    stepBtn[1].disabled = false;
  }
}
