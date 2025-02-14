// 객체
// 객체는 복합된 값이다.

// 객체생성
// 1. 객체 리터럴
// 객체를 생성하는 가장 쉬운 방법은 객체 리터럴이다.
// 객체 리터럴의 가장 단순한 형태는 클론으로 구분한 이름 : 값(key-value)쌍을 콤마로 구분하여 중괄호{}로 감싼 형태
let empty = {} // 프로퍼티가 없는 객체 즉, 빈 객체
let point = {x:0, y:1} // 프로퍼티 2개인 객체

// 2. new 연산자
// new 연산자느 새 객체를 생성하고 초기화합니다.
// new 키워드 뒤에는 반드시 함수 호출이 있어야 합니다.
let obj = new Object() // {} 새로운 빈 객체
let arr = new Array() // [] 새로운 배열

// 3. Object.create()
// Object.create()는 첫 번째 인자를 프로토타입 삼아 새 객체를 생성
let newObj = Object.create({x:1, y:2})
console.log(newObj)
console.log(newObj.x + newObj.y) // 3 => newObj는 x와 y의 프로퍼티를 상속한다.

// {} 혹은 new Object()가 반환하는 것처럼 일반적인 빈 객체를 만들고 싶을때는 다음과 같이 Object.prototye을 전달합니다.
let newObj2 = Object.create(Object.prototype)
console.log(newObj2)

// 4. 프로퍼티 검색과 설정
let position = { x:0, y:0 }
let dimensions = { width: 100, height: 100 }
let rect = {...position, ...dimensions}
console.log(rect)
console.log(position.x, position.y)
console.log(dimensions.width, dimensions.height)