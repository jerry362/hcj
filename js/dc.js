// 1. 숫자가 들어갈 자리를 변수라는 주머니에 담아둡니다
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  // 2. 현재 컴퓨터의 시간을 가져옵니다
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  // 3. 12시간제로 계산합니다 (오후 1시는 13시가 아닌 1시로 표시)
  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  // 4. 숫자가 한 자리일 때 앞에 '0'을 붙여줍니다 (예: 9 -> 09)
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  // 5. 계산된 숫자를 HTML 화면에 직접 넣어줍니다
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;

  // 6. 1초(1000밀리초)마다 이 함수를 다시 실행합니다
  setTimeout(() => {
    updateClock();
  }, 1000);
}

// 시계를 처음으로 가동합니다
updateClock();

// new Date(): 현재 시간을 실시간으로 낚아채 오는 명령어입니다.
// setTimeout: 시계가 멈추지 않도록 1초 뒤에 자기 자신을 다시 부르는 '무한 반복' 장치입니다.
// h < 10 ? "0" + h : h: "시간이 10보다 작니? 그러면 앞에 0을 붙여주고, 아니면 그냥 써!"라는 뜻의 짧은 조건문입니다.
