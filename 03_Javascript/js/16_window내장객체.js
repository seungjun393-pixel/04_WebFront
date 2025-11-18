// window.setTimeout()

document.getElementById("btn1").addEventListener("click", () => {

  window.setTimeout(function() {

      alert("3초후 출력!");
  }, 3000);
});

// window.setInterval()

function currentTime() {

  const now = new Date();

  let hour = now.getHours(); // 시간
  let minute = now.getMinutes(); // 분
  let second = now.getSeconds(); // 초
  // 1의 자리만 나올때 1, 2 이렇게 나옴
  // 디지털 시계 모양에 따라 1의 자리일 ㅣ때 01,02.. 로 표현

  if(hour < 10) hour = "0" + hour;
  if(minute < 10) minute = "0" + minute;
  if(second < 10) second = "0" + second;
  // 12 : 40 : 30
  return `${hour} : ${minute} : ${second}`;
  


  // 12 : 40 : 30


}

let interval;

function clockFn() {

  const clock = document.getElementById("clock");
  clock.innerText = currentTime();

  interval = setInterval(function() {
    clock.innerText = currentTime();
  },1000);
}

clockFn();

document.getElementById("stop").addEventListener("click", () => {
  window.clearInterval(interval);
});