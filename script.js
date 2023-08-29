const arrayOfBars = [];

function generateBar() {
  const list = document.querySelector(".visitorsList");
  const barContainer = document.createElement("li");
  barContainer.className = "barContainer";

  const bar = document.createElement("div");
  bar.className = "bar";
  const randomNumber100 = Math.floor(Math.random() * 101);

  if (list.childElementCount >= 20) {
    list.removeChild(list.firstElementChild);
    arrayOfBars.shift();
  }

  bar.style.height = randomNumber100 + "px";

  if (randomNumber100 >= 70) {
    visitorSuccess();
  } else if (randomNumber100 <= 30) {
    visitorFailure();
  }

  const barColor = (randomNumber100 / 100) * 120;
  bar.style.backgroundColor = `hsl(${barColor}, 100%, 50%)`;

  const visitors = document.createElement("div");
  visitors.className = "visitors";
  visitors.textContent = randomNumber100;

  barContainer.appendChild(bar);
  barContainer.appendChild(visitors);
  list.appendChild(barContainer);

  console.log("Bar generated!");
  arrayOfBars.push(randomNumber100);

  updateBars();
}

function updateBars() {
  const bars = document.querySelectorAll(".bar");
  bars.forEach((bar, index) => {
    bar.style.height = arrayOfBars[index] + "px";
    bar.style.backgroundColor = `hsl(${(arrayOfBars[index] / 100) * 120}, 100%, 50%)`;
    bar.nextElementSibling.textContent = arrayOfBars[index];
  });
}

function visitorSuccess() {
  let success = document.querySelector(".success");
  let currentValue = parseInt(success.textContent);
  let newValue = currentValue + 1;
  success.textContent = newValue;
  recordColor();
}

function visitorFailure() {
  let failure = document.querySelector(".failure");
  let currentValue = parseInt(failure.textContent);
  let newValue = currentValue + 1;
  failure.textContent = newValue;
  recordColor();
}

function recordColor() {
  let success = document.querySelector(".success");
  let successValue = parseInt(success.textContent);
  let failure = document.querySelector(".failure");
  let failureValue = parseInt(failure.textContent);
  let status = document.querySelector(".status");
  if (successValue > failureValue) {
    status.textContent = "You're succeeding at websiting! You've got a whole lot of visitors.";
    status.style.color = "rgb(0, 255, 0)";
  } else if (failureValue > successValue) {
    status.textContent = "You're failing at websiting! Nobody wants to visit your site.";
    status.style.color = "";
  } else {
    status.textContent = "You're neither succeeding nor failing at websiting! Very mediocre stuff.";
    status.style.color = "black";
  }
}

setInterval(generateBar, 1000);
