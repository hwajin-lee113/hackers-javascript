// 자바스크립트에서 가장 기본적인 비동기 프로그래밍은 콜백을 통해서 이루어진다.
// 콜백은 다른 함수에 전달하는 함수입니다.

// 프라미스 Promise는 비동기 작업의 결과를 나타내는 객체입니다.
// resolve, reject 인자 사용
// 결과가 준비되었을 수도 있고, 준비되지 않았을 수도 있는데, 프라미스 API는 이를 의도적으로 막연하게 표현한다.
// 프라미스의 값을 동기적으로 가져올 수 있는 방법은 존재하지 않는다.

// 프라미스 객체 .then() 
// 콜백함수를 then 메서드에 전달

let valid = false

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(valid){
                console.log("특정조건 이행");
                resolve("SUCCESS") // then함수로 넘어감
            }
            else {
                console.log("특정조건 불이행");
                reject("FAIL") // catch함수로 넘어감
            }
        }, ms);
    })
}

delay(3000).then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
})