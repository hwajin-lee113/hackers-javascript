// 변수선언과 데이터할당

let userName = "Park"
console.log(userName) // Park

function introduce(name) {
    const frame = `안녕하세요, 제 이름은 ${name}입니다.`
    console.log(name)
    console.log(frame)
}

introduce(userName) // 함수호출
introduce("Kim")
introduce("Lee")

// ------------------------------------------------------------

const COMPANYNAME = '해커스 HRD'

function education(companyName) {
    const frame = `안녕하세요, 교육의 메카 ${companyName} 입니다.`
    console.log(frame)
}

education(COMPANYNAME) // 함수호출

COMPANYNAME = "다른 값으로 할당해보겠습니다."
console.log()
