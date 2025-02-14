// this
// 일반함수는 '호출위치'에 따라서 this를 정의한다.
// 화살표함수는 '자신이 선언된 함수 범위'에서 this를 정의한다.

// const name = "park"

const user1 = {
    name: "kim",
    declare: function() {
        console.log(this.name);
    },
    express: () => {
        console.log(this.name); 
    }
}

// user1.declare() // kim
// user1.express() // undefined 함수 선언된게 없음. this를 정의할 수 없음

// --------------------------------------------------------------------------------------------------------------

const user2 = {
    name: "lee",
    declare: user1.declare,
    express: user1.express,

    test: function() {
        const test2 = () => {
            console.log(this.name);
        }
        test2()
    }
}

// user2.declare() // lee
// user2.express() // undefined
// user2.test() // lee test2 가 속한 test 함수가 user2 객체 참조하고 있으니 this 참조해서 name 가져옴

// --------------------------------------------------------------------------------------------------------------
// 생성자 함수에서 this 정의하기
function User(name) {
    this.name = name
}

User.prototype.declare = function() {
    console.log(this.name);
}
User.prototype.express = () => {
    console.log(this.name);
}

const user3 = new User("park")
// user3.declare() // park
// user3.express() // undefined

// --------------------------------------------------------------------------------------------------------------

const timer = {
    name: "choi",
    timeout1: function () {
        setTimeout(function() {
            console.log(this.name);
        }, 1000)
    },
    timeout2: function () {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
}

timer.timeout1() // undefined 함수 내 선언된 name 없음
timer.timeout2() // choi