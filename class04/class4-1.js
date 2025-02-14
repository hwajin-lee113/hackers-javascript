// 전개연산자 spread
const users = ["김아무개","이아무개","박아무개"]
console.log(users); // ['김아무개', '이아무개', '박아무개']
console.log(...users); // 김아무개 이아무개 박아무개 string 값 그대로 표기

const newUsers = ["최아무개", "송아무개", ...users, "장아무개"]
console.log(newUsers); // ['최아무개', '송아무개', '김아무개', '이아무개', '박아무개', '장아무개']

function setUsers(user1, user2, ...user3) {
    return {
        user1: user1, 
        user2: user2,
        user3: user3
    }
}
console.log(setUsers("최아무개", "송아무개", ...users)); // {user1: '최아무개', user2: '송아무개', user3: Array(3)}
console.log(setUsers("최아무개", "송아무개", ...users, "장아무개")); // {user1: '최아무개', user2: '송아무개', user3: Array(4)}

function newSetUsers(user1, user2, ...user3) {
    return {
        user1,
        user2,
        user3
    }
}
console.log(newSetUsers("최아무개", "송아무개", ...users)); // {user1: '최아무개', user2: '송아무개', user3: Array(3)}

