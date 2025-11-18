// prompt 사용연습

function test() {
  const password = prompt("비밀번호를 입력하세요");

  console.log(password);

  // 확인 입력한 값이 문자열로 저장
  // 취소 -> null

  if(password == null) { // 취소
    alert("취소")
    }else{ // 확인
      
      if(password == '1234') { // 비밀번호가 같을 때
        alert("비밀번호 일치");
      } else { // 비밀번호가 다를 때
        alert("비밀번호 불일치");
      }
    }
}

// test();

// --------------------------------

const output = document.getElementById("output");
const amount = document.getElementById("amount");

let balance = 10000;
const password = 1234;

output.innerText = balance;

function deposit() {
  const input = prompt("금액을 입력하세요");
  amount.innerText = Number(input);
  balance += Number(input);
  output.innerText = balance;
}

function withdrawal() {
  const password = prompt("비밀번호를 입력해주세요");
  if(password == 1234){
    const outputmoney = prompt("출금할 금액을 입력해주세요");
    if(balance > outputmoney){
      balance -= outputmoney;
      output.innerText = balance;
      alert(outputmoney+ "원 출금 되었습니다. 남은 잔액 : "+ balance +"원");
    }else{
      alert("출금 금액이 잔액보다 클 수 없습니다");
    }

  }else{
    alert("비밀번호가 일치하지 않습니다");
  }
}
