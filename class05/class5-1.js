// 연산자

// 자바스크립트에서 표현식을 만들 때, 가장 많이 쓰는 방법은 바로 연산자입니다.
// 1. 산술연산자
console.log(1 + 2); // 더하기
console.log(3 - 1); // 빼기
console.log(5 * 2); // 곱하기
console.log(5 / 2); // 나누기
console.log(5 % 2); // 나눈 후 나머지 값을 조회

let count = 1

count++ // 값을 1 증가
count-- // 값을 1 감소
count += 2 // 값을 2 더한다. count = count + 2
count *= 3 // 값을 3 곱한다. count = count * 3

// 2. 일치연산자
let x = 2
let y = 3
console.log(x === y); // false
console.log(x !== y); // true

let a = "10"
let b = 10
console.log( a == b ); // true 데이터 타입에 관계없이 값만 일치하는지 여부 체크. 동등연산자
console.log( a === b ); // false 데이터의 타입까지 일치하는지 여부 체크. 일치연산자

// 3. 논리연산자
// && and
// || or

let condition1 = 10
let condition2 = '20'
function typeCheck(value) {
    if (typeof value === 'string') {
        console.log("인자로 받은 데이터의 타입은 문자열입니다.")
    } else if (typeof value === 'number'){
        console.log("인자로 받은 데이터의 타입은 숫자입니다.")
    }
}

typeCheck(condition1) // 숫자
typeCheck(condition2) // 문자열

function typeCheck2(value) {
    if(typeof value === "string" || typeof value === "number"){
        console.log("타입은 문자열, 숫자 둘 중 하나입니다.")
    } else {
        console.log("기타 타입입니다.")
    }
}

typeCheck2(condition1);
typeCheck2(condition2);
typeCheck2(true); // boolean
