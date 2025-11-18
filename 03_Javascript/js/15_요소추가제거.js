const box = document.querySelector(".container");

document.querySelector("#add").addEventListener("click", () => {
  
  const list = document.createElement("div");

  list.classList.add("row");

  const input = document.createElement("input");

  const span = document.createElement("span");
  span.innerHTML = "&times";
  span.classList.add("remove-row");

  list.append(input);

  list.append(span);

  box.append(list);

});

document.querySelector("#calc").addEventListener("click", () => {

  const value = document.querySelectorAll(".input-number");

  let sum = 0;

  for(let i = 0; i < value.length; i++){
    sum += Number(value[i].value);
  }

  alert(sum);
});

