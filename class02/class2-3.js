// 1. 문자열 string (텍스트)
// 문자열 데이터 만드는 방법 : 큰 따옴표, 작은 따옴표, 백틱(``) 기호를 활용
// 백틱`` 사용 시 데이터, 변수 가져올 수 있음

let userName = "HACKERS HRD"
let phone = "010-1234-5678"
let introduction = `Hello, My name is ${userName}. My phone number is ${phone}`

console.log(typeof userName, userName)
console.log(typeof phone, phone)
console.log(typeof introduction, introduction)

// ------------------------------------------------------------

// 2. 숫자
// 숫자 데이터 만드는 방법
let number = 123
let float = 1.23
let stringNumber = "123"

console.log(typeof number, number)
console.log(typeof float, float)
console.log(typeof stringNumber, stringNumber)