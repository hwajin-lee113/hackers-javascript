// 반복문 for

// for문은 널리 쓰이는 패턴을 갖는 루프를 단순화합니다.
// for(initialize; test ; increment;){
    // statemnt(문) 로직 실행
// }

for (let count=0; count<10; count++) {
    console.log(count)
}

const posts = [
    {id: 1, title: "안녕하세요 해커스입니다.", creator: "김아무개", createAt:"2025-02-04"},
    {id: 2, title: "안녕하세요 해커스입니다.", creator: "이아무개", createAt:"2025-02-05"},
    {id: 3, title: "안녕하세요 해커스입니다.", creator: "박아무개", createAt:"2025-02-06"},
    {id: 4, title: "안녕하세요 해커스입니다.", creator: "최아무개", createAt:"2025-02-07"}
]

for (let i = 0; i <posts.length; i++) {
    console.log(posts[i]);
    console.log(posts[i].creator);
}