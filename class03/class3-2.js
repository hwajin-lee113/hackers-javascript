// 배열 메서드

// 1. forEach()
// forEach 메서드는 배열을 순회하며 각 요소에서 함수를 호출한다.
// forEach 메서드 첫번째 인자는 함수
// forEach (함수(배열요소의 값, 배열요소의 인덱스, 배열 자체))
let data = [1,2,3,4,5]
let sum = 0

// 배열의 합을 구하시오
data.forEach(function(element) {
    sum = sum + element
    // sum += element
})
console.log(sum)
const res = data.forEach(function(element, index, data) {
    data[index] = element + 1
})
console.log(data) // [2, 3, 4, 5, 6] 데이터 변형시킴
console.log(res) // 선언 없었어서 undefied

// 2. map()
// map() 메서드는 각 배열 요소를 함수에 전달해 호출하며, 그 함수가 반환하는 값으로 이루어진 배열을 반환한다.
let numbers = [1,2,3,4,5]
// numbers.map(function(element) {
//     element * element
// })

const res2 = numbers.map(function(element) {
    return element * element
})
console.log(numbers) //[1, 2, 3, 4, 5] 데이터 변형X
console.log(res2) // [1, 4, 9, 16, 25] 새로운 배열을 만든다

// 3. filter()
// fiter() 메서드는 기존 배열의 일부만 포함하는 부분 집합을 반환한다.
// 전달하는 함수를 기준으로 하며 이 함수는 ture/false 를 반환한다.
// 반환 값이 true이거나 ture로 변환될 수 있는 값이면, 해당 요소는 반환되는 배열에 포함된다.
let a = [1,2,3,4,5]
const res3 = a.filter((element) => {return element > 3 })
const res4 = a.filter((element) => {return element % 2 === 0 })

console.log(res3) // [4, 5]
console.log(res4) // [2, 4]

// 4. find와 findIndex
// find와 findIndex 메소드는 판별 함수에서 true 값은 값을 반환하는 요소를 찾아 배열을 순환한다는 점은 filter()와 같습니다.
// 하지만 filter()와 달리 이들 메서드는 기준을 만족하는 첫번째 요소를 찾는 즉시 순회를 멈춘다.
// 만족하는 요소를 찾으면 find()는 그 요소를, findIndex()는 그 요소의 인덱스를 반환합니다.
// 만족하는 요소를 찾지 못하면 find()는 undefined를, findIndex()는 -1을 반환한다.

let b = [1,2,3,4,5]
console.log(b.findIndex((element) => {return element === 3})) // 2
console.log(b.findIndex((element) => {return element === 6})) // -1
console.log(b.find((element) => {return element % 5 === 0})) // 
console.log(b.find((element) => {return element % 7 === 0})) // undeined

// 5. every와 some
// every()와 some() 메서드는 배열 요소에 판별 함수를 적용하고 결과에 따라 true / false를 반환합니다.

let c = [1,2,3,4,5]
console.log(c.every((element) => {return element < 10 })) //true 모든 값 체크
console.log(c.every((element) => {return element % 2 === 0 })) //false => 짝수가 아닌 값이 있다.

// some() 메서드는 배열 요소 중 판별 함수가 true를 반환하는 것이 하나라도 있으며 true를 반환하며
// 요소 전체가 false를 반환할 때, false를 반환한다.

let d = [1,2,3,4,5]
console.log(d.some((element) => {return element % 2 === 0 })) // true
console.log(d.some((element) => {return element < 1 })) // false

// every 와 some은 자신이 어떤 값을 반환할지 확실해지면 순간 순회를 멈춥니다.
// some은 판별함수가 true를 반환하는 즉시 true를 반환하므로 모든 요소가 false를 반환할 때만 배열 전체를 순회했다고 이해하면 됨.
// every는 반대로 판별함수가 false를 반환하는 즉시 false를 반환하므로 모든 요소가 true를 반환할 때만 배열 전체를 순회했다고 이해하면 됨.

// 6. reduce와 reduceRight
// reduce() 와 reduceRight() 메서드는 배열 요소를 값 하나로 만드는 함수입니다.
// reduce()는 인자 2개 받음. 1. '축소' 동작 함수

let array1 = [1,2,3,4,5]
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sumWithInitial)

let array2 = [2,2,2]
const square = array2.reduceRight((acc, cur) => Math.pow(cur, acc)) // 2^(2^2)
console.log(square)

// 7. flat()과 flatMap()을 사용한 배열 팡탄화 메서드
const flat1 = [1,2,3,[4,5]].flat()
console.log(flat1) //[1,2,3,4,5]

// 평탄화 레벨을 올리기도 가능
const initial = [1,[2,[3,[4,[5]]]]]
console.log(initial.flat(1)) //[1,2,3,4,5]
console.log(initial.flat(2)) //[1,2,3,4,5]
console.log(initial.flat(3)) //[1,2,3,4,5]
console.log(initial.flat(4)) //[1,2,3,4,5]
console.log(initial.flat(5)) //[1,2,3,4,5]

// 8. concat()으로 배열 병합
const numArr = [20, 30, 40, 50]
const users = ["Kim", "Lee", "Park"]

console.log(numArr.concat(users)) // 새로운 배열 생성
console.log(numArr) // 원본 배열 데이터에 영향 없
console.log(users) // 원본 배열 데이터에 영향 없