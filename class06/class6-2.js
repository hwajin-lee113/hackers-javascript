// 스코프와 호이스팅

// 스코프
// 규칙에 따라 식별자(변수, 함수, 클래스)에 접근할 수 있는 범위가 존재하는데
// 이 식별자 접근 규칙에 따른 유효 범위를 스코프라고 한다.
// 스코프에는 Global Scope, Local Scope, Block Scope와 function Scope가 있다.

let a = 10
// console.log(a); // 10

function a1() {
    let b = 20
    // console.log(b); // 20
    // console.log(a); // 10
}

a1()

// console.log(b); // b is not defined.

const b = 'b'
const b1 = () => {
    console.log(b); // b
    // b2() // 접근할 수 없음. 호출 시점보다 아래에 있어 접근 불가
    b3() // function 함수는 선언 시점과 상관없이 선언문을 맨 위로 끌어올림

    const b2 = () => {
        console.log(b);
        console.log("함수 b2 호출");
    }
    b2()

    function b3() {
        console.log('함수 b3 호출');
    }    
}
b1()

// --------------------------------------------------------------------------------------------------------------

// 호이스팅
// 함수 선언부가 유효범위 최상단으로 끌어올려가는 현상

// 1. 함수 표현 방식(=>) 사용한 경우
sum() 
// 함수 표현식은 인터프리터가 해당 코드 줄에 도달할 때만 로드된다.
// /따라서 sum 함수가 호출되었을 시점에 sum 함수가 선언되지 않은 상태에서 호출되었기에 오류 발생한다.
const sum = (s, y) => {
    return x + y
} 

// 2. 함수 선언 방식(function) 사용한 경우
double(10)
// 함수선언문은 var와 같이 함수 스코프(function scope)를 가지고
// let 과 const 변수는 블록 스코프(block scope)를 갖는다.
// 또한 함수 선언식은 코드가 실행되기 전에 로드되지만
// 함수 표현식은 인터프리터가 해당 코드에 도달할 경우에만 로드된다.
// 함수 선언식은 호이스팅되지만, 함수 표현식은 호이스팅되지 않는다.

function double(x) {
    console.log(x * 2);
    return x * 2
}