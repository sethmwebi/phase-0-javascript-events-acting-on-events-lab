// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
// dodger.style.bottom = "0px";
// dodger.style.left = "0px";

const moveDodgerLeft = () => {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
};

const moveDodgerRight = () => {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers);
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
};

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }

  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
