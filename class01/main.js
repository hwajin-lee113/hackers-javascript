//자바스크립트란 무엇인가?

// JavaScript는 웹 페이지에서 복잡한 기능을 구현할 수 있는 스크립팅 혹은 프로그래밍 언어입니다.
// 자바스크립트로 작성한 프로그램을 스크립트(script)라고 부릅니다.
// 자바스크립트는 웹 페이지의 HTML 안에 작성할 수 있는데, 웹페이지를 불러올 때 스크립트가 자동으로 실행됩니다.

// 사용자는 컴퓨터에서 웹에 접근 => 서버에 최초로 요청(Request) => 최초로 응답(Response)
// 최초로 응답받은 데이터 혹은 정보 안에는 기본적인 구조를 담은 HTML이 응답으로 전달됩니다.
// => 추가 요청 (CSS, JS, 이미지, 비디오 등) => 추가 응답

// 이때, 화면이 그려지는 작업을 렌더링이라고 하고, 그 렌더링이 완료된 화면을 사용자가 보고 활용하고 느끼는 것을
// 웹이 동작한다 라고 말합니다.

console.log("Hello, World!")

// 자료형
// 웹을 구성하는 자바스크립트 같은 경우에는 모든 것들이 데이터로 통제된다.

// 1. 기본타입에는 문자열, 숫자, 불(boolean) 타입이 있습니다.
// 추가적으로 자바스크립트 특별한 값 중 null과 undefined가 있는데
// 이는 기본타입에 속하지만, 문자열 숫자 불 타입에 속하지 않기 때문에 그 타입 자체로 취급해도 무방합니다.
// 따라서 기본 타입에는 문자열, 숫자, 불(boolean), null, undefined가 있다고 이해하시면 됩니다.

// ----------------------------------------------------------------------------------------------------

// 1. 문자열
// 문자열 데이터를 만드는 방법은 큰 따옴표, 작은 따옴표, 백틱(``)으로 문자를 감싸면 됩니다.
// 변수 선언 let, const(선언 시 반드시 값 할당해 초기화 필요, 그러나 재할당 허용하지 않음)
let typeString = "HACKERS HRD"
console.log(typeof typeString, typeString)

// 2. 숫자
// 숫자 데이터를 만드는 방법
let typeNumber = 123
console.log(typeof typeNumber, typeNumber) // number 123

// 3. 불(boolean)
// true, false 두 가지 값만 존재하는 논리데이터
let valueTrue = true
let valueFalse = false
console.log(typeof valueTrue, valueTrue) // boolean true
console.log(typeof valueFalse, valueFalse) // boolean false

// 4. null
// 어떤 값이 의도적으로 비어있음을 의미합니다.
// 여기서 key point는 "의도적으로" 입니다.
// null은 값이 없음을 나타낼 때, 사용하는 특별한 값
let empty = null
console.log(typeof empty, empty) // object null

// 여기서 null 타입은 object를 반환하는 것을 확인했습니다.
// 이를 미루어볼 때, null은 '객체가 없다'라는 것을 의미합니다.
let obj = {
    username : "HACKERS HRD",
    userphone : "010-1234-5678"
}
console.log(typeof obj, obj)
//null은 해당 타입의 유일한 멤버로 인식되며, 객체 뿐만 아니라 숫자나 문자열에도 "값이 없다"는 의미로 사용될 수 있다.

// 5. undefined
// 값이 할당되지 않은 상태를 나타내는 특별한 값
let undef
console.log(typeof undef, undef) // undefined undefined

// ----------------------------------------------------------------------------------------------------

// 6. 참조타입 - object (객체데이터 & 배열데이터)


// 6.1 객체데이터
// 객체는 복합된 값입니다. 객체는 여러가지 값을 모아서 이름을 통해 값을 지정하고 저장하고 가져올 수 있게 합니다.
// 즉, 객체는 키-벨류(key-value) 형태로 저장합니다.
let userInfo = {
    username: "HACKERS HRD",
    userage: 30,
    major: "Computer Programming",
    email: "abc@test.co.kr",
    married: false
}

console.log(typeof userInfo, userInfo)
console.log(typeof userInfo.username, userInfo.username)
console.log(typeof userInfo.userage, userInfo.userage)
console.log(typeof userInfo.major, userInfo.major)
console.log(typeof userInfo.email, userInfo.email)
console.log(typeof userInfo.married, userInfo.married)

// 6.2 배열데이터
// 배열은 값의 순서가 있는 집합입니다. 여러 데이터를 순차적으로 저장하며
// 배열 요소는 어떤 타입이든 상관없고, 배열 하나에 여러 타입이 섞여 있어도 괜찮습니다.
// 배열 요소에 객체나 다른 배열을 써도 상관없으므로 복잡한 데이터 구조를 만들 수 있습니다.
let user = ["John", "Kim", "Lee", "Park"]
let complex = [123, "John", true, userInfo]

console.log(typeof user, user)
console.log(typeof complex, complex)
