const ball = document.querySelectorAll(".ball");
const body = document.querySelector("body");
const time = document.querySelector(".time");
let count = 1;
document.querySelector(".ball6").style.display = "none";

ball.forEach(e => {
  e.addEventListener("click", () => {
    console.log("jfgkbntdjknb.kjzbn");
    const comment = document.createElement("p");
    comment.textContent = "sweet";
    comment.classList.add("sweet");
    body.appendChild(comment);
    setTimeout(() => {
      comment.remove();
    }, 1005);
    e.classList.add("go");
    setTimeout(() => {
      e.remove();
    }, 1000);
    count++;
    console.log(count);
    if (count === 7) {
      e.requestFullscreen();
      setTimeout(() => {
        body.innerHTML = "";
        const success = document.createElement("h1");
        success.textContent = "GREAT WORK";
        success.classList.add("good");
        body.appendChild(success);
        setTimeout(() => {
          location.assign("index.html");
        }, 3000);
      }, 1000);
    }
    if (count === 6) {
      comment.textContent = "one more to go";
      setTimeout(() => {
        document.querySelector(".ball6").style.display = "block";
      }, 5000);
    }
  });
});
console.log(ball.length, "yuuyuyuy");

// /////////  seting the timer ////////////

// setTimeout(() => {
//   time.textContent = 19;
// }, 1000);
// setTimeout(() => {
//   time.textContent = 18;
// }, 2000);
// setTimeout(() => {
//   time.textContent = 17;
// }, 3000);
// setTimeout(() => {
//   time.textContent = 16;
// }, 4000);
// setTimeout(() => {
//   time.textContent = 15;
// }, 5000);
// setTimeout(() => {
//   time.textContent = 14;
// }, 6000);
// setTimeout(() => {
//   time.textContent = 13;
// }, 7000);
// setTimeout(() => {
//   time.textContent = 12;
// }, 8000);
// setTimeout(() => {
//   time.textContent = 11;
// }, 9000);
// setTimeout(() => {
//   time.textContent = 10;
// }, 10000);
// setTimeout(() => {
//   time.textContent = 9;
// }, 11000);
// setTimeout(() => {
//   time.textContent = 8;
// }, 12000);
// setTimeout(() => {
//   time.textContent = 7;
// }, 13000);
// setTimeout(() => {
//   time.textContent = 6;
// }, 14000);
// setTimeout(() => {
//   time.textContent = 5;
// }, 15000);
// setTimeout(() => {
//   time.textContent = 4;
// }, 16000);
// setTimeout(() => {
//   time.textContent = 3;
// }, 17000);
// setTimeout(() => {
//   time.textContent = 2;
// }, 18000);
// setTimeout(() => {
//   time.textContent = 1;
// }, 19000);
// setTimeout(() => {
//   time.textContent = 0;

//   if (time.textContent === 0) {
//     setTimeout(() => {
//       body.innerHTML = "";
//       const over = document.createElement("h1");
//       over.textContent = "GAME OVER";
//       body.appendChild(over);
//       const tryAgain = document.createElement("a");
//       tryAgain.textContent = "try again";
//       tryAgain.setAttribute("href", "index.html");
//       body.appendChild(tryAgain);
//     }, 900);
//   }
// }, 20000);

console.log(count);
