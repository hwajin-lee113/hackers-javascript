const bodyEl = document.querySelector(".container_body")
const posts = JSON.parse(localStorage.getItem("posts"))
const selectedIndex = JSON.parse(localStorage.getItem("selectedId"))

bodyEl.innerHTML = `<div class="container_body_info">아래 입력란을 수정해주세요.</div>
    <div class="container_body_inputBox">
        <span class="label">제목</span>
        <input type="text" placeholder="제목을 입력하세요." value="${posts[selectedIndex].title}" class="input title">
    </div>
    <div class="container_body_inputBox">
        <span class="label">작성자</span>
        <input type="text" placeholder="제목을 입력하세요." value="${posts[selectedIndex].user}" class="input user">
    </div>
    <div class="container_body_inputBox">
        <span class="label">내용</span>
        <input type="text" placeholder="제목을 입력하세요." value="${posts[selectedIndex].content}" class="input content">
    </div>
    <div class="container_body_inputBox">
        <span class="label">작성날짜</span>
        <input type="text" placeholder="제목을 입력하세요." value="${posts[selectedIndex].createAt}" class="input createAt">
    </div>`


const titleTag = document.querySelector(".input.title")
const userTag = document.querySelector(".input.user")
const contentTag = document.querySelector(".input.content")
const createAtTag = document.querySelector(".input.createAt")

// ------------------------------------------------------------------------------------------

// 수정
const updateBtn = document.querySelector(".container_footer_button.update")

// 변경된 값 받을 준비
let title = ""
let user = ""
let content = ""
let createAt = ""

titleTag.addEventListener("input", (event) => {
    title = event.target.value
} )
userTag.addEventListener("input", (event) => {
    user = event.target.value
} )
contentTag.addEventListener("input", (event) => {
    content = event.target.value
} )
createAtTag.addEventListener("input", (event) => {
    createAt = event.target.value
} )

updateBtn.addEventListener("click", () => {
    posts[selectedIndex].title = title
    posts[selectedIndex].user = user
    posts[selectedIndex].content = content
    posts[selectedIndex].createAt = createAt

    console.log(posts);

    const original = [...JSON.parse(localStorage.getItem("posts"))]
    original.forEach((item)=> {
        if(item.id === posts[selectedIndex].id){
            item.title = posts[selectedIndex].title
            item.user = posts[selectedIndex].user
            item.content = posts[selectedIndex].content
            item.createAt = posts[selectedIndex].createAt
        }
    })
    localStorage.setItem("posts",JSON.stringify(original))
    window.alert("수정이 완료되었습니다.")
    location.href="./index.html"
})

// ------------------------------------------------------------------------------------------

// 삭제
const deleteBtn = document.querySelector(".container_footer_button.delete")

deleteBtn.addEventListener("click", () => {
    // 우리가 index.html 파일에서 해당 포스트 상세보기를 클릭하였을 때, selectedId 값을 로컬스토리지에 저장했습니다.
    // 접근한 상세데이터 삭제
    posts.splice(selectedIndex, 1)
    localStorage.setItem("posts", JSON.stringify(posts))

    window.alert("삭제가 완료되었습니다.")
    location.href="index.html"
})

// ------------------------------------------------------------------------------------------

// 뒤로가기
const backBtn = document.querySelector(".container_header_button")
backBtn.addEventListener("click", () => {
    location.href="index.html"
})