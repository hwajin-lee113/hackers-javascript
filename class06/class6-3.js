// 콜백 / 콜백함수
// 함수의 인자(argument)로 사용되는 함수
// 다른 함수를 파라미터로 받아서 내부에서 그것을 호출하고 있습니다.
// 자바스크립트에서는 가능하고, 이걸 우리는 '콜백함수'라고 부르기로 함
// 다른 함수의 파라미터로서 전달되는 함수를 콜백함수라고 한다.

const user = {
    id: 1,
    name: "kim",
    address: "seoul", 
    company: "hackers hrd",
    majors: ["javascript"]
}

function timeout(callback) { // callback: 함수 안의 인자를 함수로 보냄
    console.log("timeout 함수 호출");
    setTimeout(() => { // 1초 후 callback 안에 있는 user가 찍힘
        callback()
    }, 1000)
}

timeout(function getData() { // getData 안 인자를 timeout으로 
    console.log(user); // 1초 후 이게 실행됨
})

// --------------------------------------------------------------------------------------------------------------
