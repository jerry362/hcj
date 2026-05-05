// 1. 제어할 요소들을 선택한다
const navbarEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container");

// 2. 윈도우(브라우저 창) 전체에 스크롤 이벤트를 추가한다
window.addEventListener("scroll", () => {
  // 3. 현재 스크롤 위치(window.scrollY)가 특정 지점을 넘었는지 확인한다
  // 지점: 하단 컨테이너 시작 위치 - 네비게이션 높이 - 약간의 여유(50px)
  if (
    window.scrollY >
    bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50
  ) {
    // 지점을 넘었다면 'active' 클래스를 붙여서 색상을 바꾼다
    navbarEl.classList.add("active");
  } else {
    // 위로 다시 올라갔다면 'active' 클래스를 제거한다
    navbarEl.classList.remove("active");
  }
});

// window.scrollY: 사용자가 현재 위에서부터 얼마나 아래로 스크롤 했는지를 나타내는 값이다.
// bottomContainerEl.offsetTop: 하단 컨텐츠가 시작되는 지점의 높이 값이다.
// classList.add/remove: CSS에서 미리 만들어둔 .active 스타일을 켰다 껐다 하는 스위치 역할을 한다.
