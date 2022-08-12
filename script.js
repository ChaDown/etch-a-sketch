"use strict";

const container = document.querySelector(".container");

//const gridQty =

for (let i = 0; i < 273; i++) {
  const div = document.createElement("div");
  container.appendChild(div);
}

const divArr = Array.from(document.querySelector(".container").children);

divArr.forEach((div) =>
  div.addEventListener("mouseover", () => (div.style.backgroundColor = "black"))
);
