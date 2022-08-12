"use strict";

const container = document.querySelector(".container");
const clearBtn = document.querySelector(".clear-btn");
const gridBtn = document.querySelector(".grid-btn");

const gridCreate = function (gridQty = 20) {
  for (let i = 0; i < gridQty ** 2; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.style.width = `${100 / gridQty}%`;
    div.style.height = `${100 / (gridQty + 3)}vh`;
  }
};

gridCreate();

// We use this function to get the current array of divs, as with grid create we are always making new arrays!

const getCurrentArr = function () {
  const currentArr = Array.from(document.querySelector(".container").children);
  return currentArr;
};

const randomColourGenerator = function () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
};

//const divArr = Array.from(document.querySelector(".container").children);

const colorDivs = function (arr) {
  arr.forEach((div) => {
    div.addEventListener(
      "mouseover",
      () => (div.style.backgroundColor = randomColourGenerator())
    );
  });
};

colorDivs(getCurrentArr());

clearBtn.addEventListener("click", () => {
  getCurrentArr().forEach((div) => (div.style.backgroundColor = "white"));
});

gridBtn.addEventListener("click", () => {
  const userInput = +prompt(
    "How many grid squares would you like across? e.g. 64 = 64x64 grid. Maximum input 100"
  );
  if (userInput <= 100 && typeof userInput === "number" && userInput > 0) {
    container.innerHTML = "";
    gridCreate(userInput);
    colorDivs(getCurrentArr());
  }
});
