// Codes here

// ? VARIABLES
let colorInput = document.querySelector("#colorInput");
const colorText = document.getElementById("colorText");
const body = document.body;
const copy = document.querySelector("#copy");
let color;

// ? CREATE RANDOM COLOR WITH HEX CODES AND APPLY CHANGES
createRandomColor=()=>{
  let letters = "0123456789ABCDEF";

  // HTML color code starts with #
  let color = "#";

  // Generating 6 times as HTML color code
  // consist of 6 letter or digits
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }  
  body.style.backgroundColor = color;
  colorText.innerText = color;
  colorInput.value = color;
  
}

// ? WHEN PAGES IS LOAD
window.addEventListener("load", () => {
  createRandomColor()

});

// ? WHEN CLİCK AND HOVER OVER THE BUTTONS
const btnClick = document.querySelector(".btn-click");
btnClick.addEventListener("click", () => {
  createRandomColor()

});

const btnOver = document
.querySelector(".btn-over")
.addEventListener("mouseover", () => {
  createRandomColor()
  });

  // ? WHEN CLİCK ENTER KEY FROM KEYBOARD
document.addEventListener("keydown", (e) => {
  e.key === "Enter" && createRandomColor()
});

// ? IT COPPY TO CLIPBOARD AND ADD EFFECT THE COPY ICON
copy.addEventListener("click", (e) => {
  navigator.clipboard.writeText(colorInput.value);
  copy.classList.toggle("copy-light");
  
  setTimeout(function () {
    copy.classList.toggle("copy-light");
  }, 800);
});

// ? IT ALLOWS TO CHOOSE ANY COLOR FROM INPUT 
colorInput.addEventListener("input", () => {
  colorText.innerText = colorInput.value;
  body.style.backgroundColor = `${colorInput.value}`;
});

