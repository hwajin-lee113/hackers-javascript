// 1. function 함수
// 함수선언은 function 키워드 뒤에 다음 세 가지 구성요소를 씁니다.
// - 함수 이름이 될 식별자(sum), 이름은 함수 선언에서 뺄 수 없는 부분입니다. 이 이름은 변수 이름으로 쓰이며, 새로 정의된 함수 객체가 이 변수에 할당됩니다.
// - 괄호로 감싸고 콤마로 구분한 0개 이상의 식별자 리스트(x, y). 이 식별자들은 함수 매개변수 이름이며 함수 바디 안에서 로컬 변수로 동작합니다.
// - 중괄호로 감싼 0개 이상의 자바스크립트 문{}. 이 문이 함수 바디이며, 함수를 호출할 때마다 실행됩니다.

function sum(x, y) {
    console.log(x + y);
    return x + y // 리턴 키워드 호출 이후에는 함수 종료
}

sum(10, 20)

const a = sum(100, 200) // 변수로 할당시켜 활용할 수 있음. 매개변수화
console.log(a); // 300

// --------------------------------------------------------------------------------------------------------------

function order(beverage) {
    if( beverage ==="lemonade") {
        return console.log(`${beverage}는 품절입니다.`);
    } else if (beverage === "ice americano") {
        return console.log(`${beverage}는 주문 가능합니다.`);
    } else {
        console.log(`${beverage}는 준비 중인 메뉴입니다.`);
    }
}

order("lemonade")
order("ice americano")
order("cafe latte")

function test () {
    console.log(arguments); // 인자 담아주지 않아도 arguments 이용해서 활용 가능
    return arguments[0]; // A
}
console.log(test("A","B"));

// --------------------------------------------------------------------------------------------------------------

// 2. 화살표 함수
// const reSum = () => {}
    
const double = (x) => x + 2
const callArray = () => [10, 20, 30]
const callObject = () => ({
    name: "hackers hrd"
})
