// 비동기 async & await
// Promise : .then, .catch 사용
// async, await : try, catch 사용

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

// delay(3000).then((res) => {
//     console.log("done Primise: ", result);
// }).catch((error) => {
//     console.log("fail Primise: ", error);
// })

// --------------------------------------------------------------------------------

async function main() {
    try { // resolve 부분
        console.log("호출");
    
        const result = await delay(5000) // 5초 실제 동작은 비동기로 하지만 코드적으로 봤을때 동기처럼 동작하는 듯 하다
        console.log("done async: ", result);
    } catch (error) { // reject 부분
        console.log("fail async: " , error);
    }
}

main()