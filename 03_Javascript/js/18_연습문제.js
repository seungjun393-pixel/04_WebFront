document.getElementById("btn1").addEventListener("click", () => {

  const size = document.getElementById("size").value;
  const color = document.getElementById("color").value;

  const area = document.getElementById("area");
  area.style.fontSize = size +"px";
  area.style.color = color;
});