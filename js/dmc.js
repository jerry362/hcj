// 1. 필요한 요소를 가져온다
const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");

// 2. 브라우저 저장소(localStorage)에서 기존 설정을 불러온다
inputEl.checked = JSON.parse(localStorage.getItem("mode"));

// 3. 불러온 설정에 맞춰 초기 화면을 그린다
updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.classList.add("dark"); // 체크되어 있으면 dark 클래스 추가
  } else {
    bodyEl.classList.remove("dark"); // 아니면 삭제
  }
}

// 4. 스위치를 조작할 때마다 실행된다
inputEl.addEventListener("input", () => {
  updateBody(); // 화면 테마 변경
  updateLocalStorage(); // 변경된 설정 저장
});

// 5. 설정을 브라우저에 저장하는 함수
function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}

// classList.add("dark"): 이 한 줄의 코드로 CSS에 정의된 body.dark 변수들이 활성화된다.
// localStorage: 브라우저를 껐다 켜도 사용자가 마지막으로 선택한 모드를 기억할 수 있게 해주는 기능이다.
// JSON.parse / JSON.stringify: 데이터를 저장하거나 불러올 때 브라우저가 이해할 수 있는 형식으로 변환해주는 과정이다.
// 이 코드를 모두 작성하면, 세련된 애니메이션과 데이터 저장 기능까지 갖춘 완벽한 다크모드 토글 시스템을 완성할 수 있다.
