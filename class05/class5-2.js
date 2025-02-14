// 조건문 if, switch

// 조건문은 지정된 표현식의 값에 따라 다른 문을 실행하기도, 않기도 한다.
// 조건문은 코드에서 어떤 것을 결정하는 부분이며, 때때로 분기점(branch) 라고 부르기도 하며, 분기처리 한다라고 말한다.

// 1. if문
// if문은 자바스크립트가 조건에 따라 문을 실행할 수 있게 하는 기본적인 제어문입니다.
// if (expression: 표현식) {
//     statement: 로직 수행
// }

// 위와 같은 형태에서 expression 표현식을 평가합니다.
// 결괏값이 true이면 statement(문) => 로직이 실행됩니다.
// 결괏값이 false이면 statement(문) => 로직이 실행되지 않습니다.

// if (1) {
//     console.log(Object);
// } else if (2) {
//     console.log(Object);
// } else {
//     console.log(Object);
// }

// ------------------------------------------------------------------------------------------------------------------------

function getData(user) {
    if(user.age === 10) {
        console.log(`조회한 유저의 이름은 ${user.name}이며, 나이는 ${user.age}세 입니다. 청소년 층입니다.`)
    } else if (user.age === 30) {
        console.log(`조회한 유저의 이름은 ${user.name}이며, 나이는 ${user.age}세 입니다. 청년 층입니다.`)
    } else if (user.age === 50) {
        console.log(`조회한 유저의 이름은 ${user.name}이며, 나이는 ${user.age}세 입니다. 중장년 층입니다.`)
    }
}

const user1 = {
    name: "김아무개",
    age: 10
}

const user2 = {
    name: "이아무개",
    age: 30
}

const user3 = {
    name: "박아무개",
    age: 50
}

getData(user1)
getData(user2)
getData(user3)

// ------------------------------------------------------------------------------------------------------------------------

// 2. switch문
// if문은 프로그램 실행 흐름에 분기점을 만들고, else if 를 써서 분기점을 여러 개 만들 수 있었다.
// 하지만 모든 조건이 같은 표현식의 값에 따라 좌우된다면 else if 가 최선의 선택이 아닐 수 있음
// 그래서 이를 대응하기 위해 switch문이 대체할 수 있습니다.

// switch 형태
// breat 대신 return 키워드 사용 가능

// switch (expression) {
//     case 1: 
//         // 코드 블록 #1을 실행
//     break

//     case 2:
//         // 코드 블록 #2을 실행
//     break
// }

function convert(props) {
    switch (typeof props) {
        case "string" :
            return console.log("전달받은 데이터의 타입은 문자열입니다.")
        case "number" :
            return console.log("전달받은 데이터의 타입은 숫자입니다.")
        case "boolean" :
            return console.log("전달받은 데이터의 타입은 불린입니다.")
    }
}

convert('1')
convert(2)
convert(true)