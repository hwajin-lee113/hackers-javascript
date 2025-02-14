// 얕은복사와 깊은 복사

// 복사란, 원본을 베낀다.
// 얕은 복사: 원래 값과 복사된 값이 같은 메모리 주소를 바라보고 있음
// 깉은 복사: 얕은 복사처럼 참조 주소 값을 복사하는 것이 아닌, 값만 복사되는 것
// 원본과의 참조가 완전히 끊어진 상태 = 깊은 복사

// 새롭게 생성된 user가 a라는 메모리에 할당되었다고 가정
const user = {
    id: 1, 
    name: "김아무개",
    address: "seoul",
    company: "hackers",
    major: ["javascript"]
}
const copyUser = user
// console.log(user); // {id: 1, name: '김아무개', address: 'seoul', company: 'hackers', major: Array(1)}
// console.log(copyUser); // {id: 1, name: '김아무개', address: 'seoul', company: 'hackers', major: Array(1)}
// console.log("----------");
// console.log(user === copyUser); // true

user.address = "경기"
console.log(user); // {id: 1, name: '김아무개', address: '경기', company: 'hackers', major: Array(1)}
console.log(copyUser); // {id: 1, name: '김아무개', address: '경기', company: 'hackers', major: Array(1)}
// user 객체 데이터의 address 값만 변화하고자 했는데
// 위 두 콘솔에서 address 값이 둘다 바뀜
// 그 이유는 user 객체와 copyuser 객체 모두 a 메모리 주소를 참조하고 있기 때문

// --------------------------------------------------------------------------------------------------------------

const newUser = {
    id: 1, 
    name: "김아무개",
    address: "seoul",
    company: "hackers",
    major: ["javascript"]
}
// Object(대상객체, 출처객체)
// 대상객체에 출처객체 데이터를 담아서 새로운 객체 데이터를 반환한다. ===> 얕은 복사(shallow copy)
// const copyNewUser = Object.assign({}, newUser) //새로운 메모리에 새로 운 데이터 할당
// // const copyNewUser = {...newUser} // 전개연산자를 통해 얕은 복사가 진행된다. => Object.assign{}과 동일 
// console.log(newUser === copyNewUser) // false

// newUser.address ="경기"
// console.log("newUser", newUser); // newUser {id: 1, name: '김아무개', address: '경기', company: 'hackers', major: Array(1)}
// console.log("copyNewUser", copyNewUser); // copyNewUser {id: 1, name: '김아무개', address: 'seoul', company: 'hackers', major: Array(1)}
// console.log(newUser === copyNewUser); // false

// --------------------------------------------------------------------------------------------------------------

const addedMajor = ["React", "Vue.js", "Angular", "Svelte"]
// newUser.major.push(...addedMajor)
// console.log(newUser); // {id: 1, name: '김아무개', address: '경기', company: 'hackers', major: Array(5)}
// console.log(copyNewUser); // {id: 1, name: '김아무개', address: 'seoul', company: 'hackers', major: Array(5)}

// 우리가 원했던 건 newUser의 major 배열에만 값이 추가되길 원했는데
// 다른 메모리 주소를 참조하고 있는 copyuser major 값도 변함
// console.log(newUser.major === copyNewUser.major) // true

// 여기서 newuser.major === copynewuser.major의 값이 true인 이유는 newuser와 copynewuser의 객체가 생성된 메모리 자체의 주소는 다르지만
// newuser와 copynewuser 내 major라는 배열 데이터 자체는 따로 복사처리가 되지 않았다. 그래서 복사처리가 되지 않았기 때문에 그 값을 같이 공유하고 있다.
// 그래서 쉽게 풀어 설명해보면, 가장 바깥쪽 껍데기만, 껍데기 주소만 복사가 됐다고 이해하면 됩니다.

// --------------------------------------------------------------------------------------------------------------

// lodash 라이브러리
// 이를 활용하여 deep copy 깊은 복사를 활용

const deepCloneUser = _.cloneDeep(newUser)

newUser.major.push(...addedMajor);

console.log("deepCloneUser: ", deepCloneUser); // {id: 1, name: '김아무개', address: 'seoul', company: 'hackers', major: Array(1)} 깊게 복사하여 addedd 되지 않음

console.log("newUser: ", newUser); // {id: 1, name: '김아무개', address: 'seoul', company: 'hackers', major: Array(5)}
console.log(newUser === deepCloneUser); // false