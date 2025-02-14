// 반복문 for-in / for-of / forEach

// 1. for-in
// for-in 객체 데이터일 경우에만 사용할 수 있는 반복문
const post = {
    id: 1,
    title: "Hi, I am hackers",
    creator: "kim",
    createAt: "20250204"
}

for(property in post) {
    console.log(property);
    console.log(post[property]);
    console.log(property+": "+post[property]);
}

for (key of Object.keys(post)) { // post 객체지만 객체의 key만 추출해서 새로운 배열을 만든 후 for-of 구문 사용
    console.log(Object.keys(post));
    console.log(post[key]);
}

// 2. for-of
// for-of는 배열 데이터일 경우에만 사용할 수 있는 반복문입니다.
const posts = [
    {
        id: 1,
        title: "Hi, I am hackers1",
        creator: "kim",
        createAt: "20250204"
    },
    {
        id: 2,
        title: "Hi, I am hackers2",
        creator: "lee",
        createAt: "20250205"
    },
    {
        id: 3,
        title: "Hi, I am hackers3",
        creator: "park",
        createAt: "20250206"
    }

]

// for (let post of posts) {
//     console.log(post);
//     console.log(post.creator);
// }

// for (key of Object.keys(post)) {
//     console.log(post(key));
// }

// 3. forEach
// forEach 메서드는 배열을 순회하며 각 요소에서 함수를 호출합니다.
// forEach 메서드의 첫 번째 인자는 함수입니다.
// forEach 메서드의 첫 번째 인자의 첫 번째 인자는 배열 요소의 값
// forEach 메서드의 첫 번째 인자의 두 번째 인자는 배열 요소의 인덱스
// forEach 메서드의 첫 번째 인자의 세 번째 인자는 배열 그 자체

// posts.forEach((배열 요소의 값, 배열 요소의 인덱스, 배열 그자체) => {})

posts.forEach((post, index, array) => {
    // console.log(post);
    // console.log(index);
    // console.log(array);

    post.id = 100
})

// console.log(posts);

const res = posts.map((post, index, array) => {
    // console.log(post);
    // console.log(index);
    // console.log(array);
    return post
})

// map, forEach 배열을 순회하는 메서드

console.log(res);
console.log(posts);
console.log(res === posts); // false 메모리 주소 참고하고 있다. 깊은 복사