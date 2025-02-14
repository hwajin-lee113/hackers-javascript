// 비동기 - Promise

// 동기코드란 무엇인가?
// 순차적으로 코드가 진행되는 것을 의미한다.

 const x = double(100)
 const y = x

 function double(pros) {
    return pros * 2
 }

// 위 코드는 동기코드이다.
// 6번째 라인 코드가 실행되고 완료되어야 7번째 라인 코드가 실행된다.
// 앞의 코드가 완료되기 전에 그 다음코드를 실행할 수 없는 상태
// 앞, 뒤의 코드가 관계성이 있고, 종속성이 있다.

// 비동기 코드란 무엇일까?
// 앞의 상황이 종결되지 않아도, 완료되지 않아도 다음 코드를 실행시킬 수 있는 상태
// 자바스크립트에서는 정삭적으로 비동기 코드를 만들어 낼 수 없다.

function sum(a, b) {
    setTimeout(() => {
       return a + b 
    }, 1000);
}

const result = sum(100, 200)
const z = result
// console.log(z); // undefined
// 위의 값이 undefined 가 출력되는 이유는 return 시킨 값을 받지 못했기 때문
// setTimeout으로 순차적으로 코드가 흐르도록 하지 않았기 때문
// 이를 해결하기 위해 callback 사용 가능

function sum2(a, b,cb) {
    setTimeout(() => {
       cb(a + b) 
    }, 1000);
}
const result2 = sum2 (100, 200, (res) => {
    console.log(res); // 1초 뒤 300 출력
})
const z2 = result2
// console.log(z2); //undefined 먼저 호출

// --------------------------------------------------------------------------------------------------------------

const result3 = new Promise((resolve, reject) => {
    // resolve라는 함수 : Promise 내부에서 일어나는, 동작하는 작업이 성공했을 경우 동작
    resolve("성공")
    // reject라는 함수 : Promise 내부에서 일어나는, 동작하는 작업이 실패했을 경우 동작
    reject("실패")
})
result3.then(function (res) { // 성공하면 then 함수로 넘어감
    console.log(res);
})

// 위 코드 자체는 비동기 코드는 아니다. 동기 코드이다.
// Promise에서 setTimeout을 걸어주어야 임의의 비동기 코드 로직이 된다.
// 콜백은 다른 함수에 전달하는 함수이다.
// 기존의 callback 구조를 then/ catch 로 받을 수 있게끔 해주는 것이 Promise이다.
// .then 메서드를 남발하면 결국 콜백지옥에 빠지게 됨 -> 복잡해짐
// 여러 개의 비동기 상황을 엮을 때 사용한다.
