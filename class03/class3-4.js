// 객체 메서드

// 1. assign
// assign() 메서드는
// 첫번째 인자는 대상객체, 두번째 인자는 출처객체
// Object.assign(target, source) => source 부분을 target에 집어 넣고 새로운 객체를 반환한다.

const target = { a:1, b:2 }
const source = { b:4, c:5 }
// const newObj = { c:3, d:4 }

const returnedTarget = Object.assign(target, source)
const returnedTarget2 = Object.assign({}, target, source)

// const test = Object.assign({}, target, newObj)
// console.log(test) //{a: 1, b: 4, c: 3, d: 4}

console.log(returnedTarget) // {a: 1, b: 4, c: 5} 같은 값 합쳐짐
console.log(returnedTarget2) // {a: 1, b: 4, c: 5} 
console.log(returnedTarget === target) // true => 생긴 모양이 똑같아서 true 반환X, 같은 메모리 주소를 바라보고 있기에 true

const a = { k:123 }
const b = { k:123 }

console.log(a === b) // false => 다른 메모리 주소를 바라보고 있기 때문

// 2. keys
// keys() 메서드는 한 객체의 키값만 추출하여 새로운 배열을 반환하는 메서드이다.
const user = {
    name: "hackers hrd"
    , age: 30
    , email: "hackers@test.com"
}
const keys = Object.keys(user)
console.log(keys) // ['name', 'age', 'email']
console.log(user["name"]) // hackers hrd

const values = keys.map((key)=>{
    return user[key] // => 해당 객체의 해당 key 값을 가진 value만 추출
})
console.log(values) // ['hackers hrd', 30, 'hackers@test.com']