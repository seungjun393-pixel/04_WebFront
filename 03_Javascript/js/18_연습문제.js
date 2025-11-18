function makeBox() {

  // 입력값 가져오기
  const w = document.getElementById('width').value;
  const h = document.getElementById('height').value;
  const text = document.getElementById('content').value;
  const color = document.getElementById('color').value;
  const align = document.getElementById('align').value;

  // div 요소 생성
  const box = document.createElement('div');

  // 스타일 적용 (조건대로)
  box.style.width = w + "px";
  box.style.height = h + "px";
  box.style.border = "2px solid black";
  box.style.color = color;
  box.style.textAlign = align;
  box.style.display = "flex";
  box.style.justifyContent = align === "left" ? "flex-start" :
                             align === "right" ? "flex-end" : "center";
  box.style.alignItems = "center";

  // 내용 넣기
  box.innerText = text;

  // result 영역에 추가 전에 기존 내용 제거
  const result = document.getElementById('result');
  result.innerHTML = "";
  result.appendChild(box);
}
