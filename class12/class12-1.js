// 생성자 함수(prototype)

const user1 = {
    name: "kim",
    age: 30,
    getData: function() {
        return `Hi My name is ${this.name}, and ${this.age} years old.`
        // this라는 것은 this가 소속되어 있는 함수가 실행되는 객체를 지칭
    }
}
// console.log(user1);

// 위 코드에서 기본적인 객체의 구조는 key-value의 형태를 띄고 있고,
// 이때, key를 프로퍼티(property)라는 명칭으로 부른다.
// 단, 함수 데이터가 할당되어 있다면 그것은 더 이상 속성 즉, 프로퍼티가 아니라 메서드라고 부른다.


const user2 = {
    name: "lee",
    age: 29,
    getData: function() {
        return `Hi My name is ${this.name}, and ${this.age} years old.`
        // this라는 것은 this가 소속되어 있는 함수가 실행되는 객체를 지칭
    }
}
// console.log(user2);

const user3 = {
    name: "park",
    age: 28,
    getData: function() {
        return `Hi My name is ${this.name}, and ${this.age} years old.`
        // this라는 것은 this가 소속되어 있는 함수가 실행되는 객체를 지칭
    }
}
// console.log(user3);

// --------------------------------------------------------------------------------------------------------------

// 같은 코드를 여러번 작성해야하는 부분이 보이고, 로직도 같은 부분이 보인다. ex) getData 메서드 같은 부분
// 이때, 메서드가 생성될 때는 메모리를 차지하기 때문에 위와 같은 코드는 메모리 효율이 떨어진다.
// 생성자 함수 대문자로 시작

function User(name, age) {
    this.name = name
    this.age = age
    // 아래 코드 또 작성하는 것은 비효율적
    // this.getData = function() {
    //     return `Hi My name is ${this.name}, and ${this.age} years old.`
    // }
}
// 로직이 동일하기에 로직 자체를 메모리에 한 번만 만들어서 효율적으로 / 효과적으로 관리할 수 있도록 한다.
// 이를 위해 prototype이라는 것을 활용한다.

User.prototype.getData = function() {
    return `Hi My name is ${this.name}, and ${this.age} years old.`
}

const user4 = new User('kim', 30) // 생성자 함수
const user5 = new User('lee', 29)
const user6 = new User('park', 28)

console.log(user4.getData());
// console.log(user5);
// console.log(user6);

const a = [1,2,3]
console.log(a); // prototype을 보면 여러 prototype으로 만들어진 메서드가 보였는데, foreach, map, every... => getData와 같은 개념
// 자바스크립트는 프로토타입 기반의 언어라고 불린다.
