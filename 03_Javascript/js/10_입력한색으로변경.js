const box = document.querySelectorAll(".box");
const input = document.querySelectorAll(".color-input");

document.getElementById("changeButton").addEventListener("click", function() {

  for(let i = 0; i <=4; i++){
    box[i].style.backgroundColor = input[i].value;
  }
});
