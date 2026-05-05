// HTML 요소들을 가져온다
const nameInput = document.getElementById("name-input");
const msgInput = document.getElementById("msg-input");
const nameDisplay = document.getElementById("display-name");
const msgDisplay = document.getElementById("display-msg");
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");

// 1. 페이지 로드 시: 저장된 이름과 메시지가 있는지 확인한다
const savedName = localStorage.getItem("userName");
const savedMsg = localStorage.getItem("userMsg");
// 여기서 중요한 것!!!
// "이전에 선언된 적이 없는데 어떻게 가져오지?"라는 의문이 생길 수 있다. 이에 대해 초보자가 이해하기 쉽게 설명한다.
// userName이나 userMsg와 같은 이름표(Key)는 개발자가 자유롭게 정하는 별명이다.
// 저장된 시점: 이 코드가 실행되기 전, 과거의 어느 시점에 누군가가(혹은 본인이 테스트하며) localStorage.setItem("userName", "값") 명령어를 실행한 적이 있어야 한다.
// 물리적 선언: 이 데이터는 자바스크립트 파일 안이 아니라, 사용자의 컴퓨터 하드디스크 내 브라우저 관리 폴더에 텍스트 형태로 이미 기록되어 있다.
// 처음 방문했다면 당연히 창고에는 아무것도 없다.
// 이 경우 getItem은 에러를 내는 대신 null(아무것도 없음)이라는 값을 돌려준다.
// 모든 함수는 Return Type을 미리 확인하여야 한다.
// 그래서 보통 if (savedName)과 같은 조건문을 써서 "값이 있을 때만 화면에 표시해라"라는 안전 장치를 만들어 두는 것이다.

// 2. 데이터가 있다면 화면에 바로 띄워준다
if (savedName) nameDisplay.innerText = savedName;
if (savedMsg) msgDisplay.innerText = savedMsg;

// 3. 저장 버튼 클릭 시: 입력한 값을 로컬 스토리지에 저장한다
saveBtn.addEventListener("click", () => {
  const name = nameInput.value;
  const msg = msgInput.value;

  // 로컬 스토리지에 각각 저장 (setItem)
  localStorage.setItem("userName", name);
  localStorage.setItem("userMsg", msg);

  // 화면도 즉시 업데이트
  nameDisplay.innerText = name;
  msgDisplay.innerText = msg;

  alert("프로필이 저장되었습니다!");
});

// 4. 초기화 버튼 클릭 시: 로컬 스토리지 데이터를 지운다
clearBtn.addEventListener("click", () => {
  // 특정 데이터만 골라서 삭제 (removeItem)
  localStorage.removeItem("userName");
  localStorage.removeItem("userMsg");

  // 화면을 기본 상태로 되돌린다
  nameDisplay.innerText = "이름 없음";
  msgDisplay.innerText = "상태 메시지를 입력해 주세요.";
  nameInput.value = "";
  msgInput.value = "";
});

// 다중 데이터 저장: localStorage.setItem을 여러 번 사용하여 각각 다른 이름표(userName, userMsg)로 데이터를 저장할 수 있다.
// removeItem 활용: clear()를 쓰면 모든 데이터가 사라지지만, removeItem("이름표")를 쓰면 내가 원하는 특정 정보만 골라서 지울 수 있다.
// 실시간 반영: 버튼을 눌렀을 때 localStorage에 저장함과 동시에 innerText를 바꿔줌으로써 사용자가 "저장되었다"는 것을 시각적으로 즉시 느끼게 한다.
// 이 프로젝트를 통해 로컬 스토리지가 마치 '내 브라우저 속 작은 메모장'처럼 작동한다는 사실을 완벽히 이해할 수 있다. 정보를 입력하고 브라우저를 새
