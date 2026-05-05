const productInput = document.querySelector("#product");
const checkMsg = document.querySelector("#check-msg");
productInput.onchange = () => {
  const confirmedVlaue = productInput.value;
  // onchange 이벤트는 엔터를 누르거나 Tab키를 눌러서 해당하는 입력란을 벗어날 때 발생한다.
  checkMsg.innerText = `확정된 내용: ${confirmedVlaue}`;
};

// 강제로 새로고침을 못 하게 함
const oderform = document.forms["order"];
oderform.onsubmit = () => {
  // 모든 값 가져오기(5개)

  const product = oderform.product.value;
  const count = orderForm["prod-num"].value;
  const name = orderForm["order-name"].value;
  const tel = orderForm["order-tel"].value;
  const addr = orderForm["order-addr"].value;

  // 출력을 위한 공간이 없으니까 만들자 - 해당하는 태그 & id가 없으면 만들자
  // 최초에는 없으니까 만들자
  let resultArear = document.querySelector("#result-view"); // 없는걸 가져다가 대입을 시키면 거짓이 나옴
  if (!resultArear) {
    resultArea = document.createElement("div");
    resultArea.id = "result-view";
    orderForm.after(resultArea);
  }
};
document.addEventListener("DOMContentLoaded", () => {
  const orderForm = document.forms["order"];
  orderForm.onsubmit = (e) => {
    e.preventDefault();
    const product = orderForm.product.value;
    const count = orderForm["prod-num"].value;
    const name = orderForm["order-name"].value;
    const tel = orderForm["order-tel"].value;
    const addr = orderForm["order-addr"].value;
    let resultArea = document.querySelector("#result-view");
    if (!resultArea) {
      resultArea = document.createElement("div");
      resultArea.id = "result-view";
      orderForm.after(resultArea);
    }
    resultArea.innerHTML = `
    <hr>
    <h3>주문 내역</h3>
    <p>상품: ${product} / 수량: ${count}</p>
    <p>주문자: ${name} (${tel})</p>
    <p>주소: ${addr}</p>
    `;
  };
});

// html에서 submit을 실행 시키면 웹 브라우저는 무조건 새로고침을 해버림
