// API 호출에 필요한 정보
const API_URL = "https://api.unsplash.com/search/photos"
const API_KEY = "iDXkRHEiwltmZGSRm5blaNO0SaW0q07JaD0Wa86wfkg"
const PER_PAGE = 30

let searchValue = "Korea"
let pageValue = 1 

// ------------------------------------------------------------------------------------------

const dataBoxEl = document.querySelector(".mySwiper")
const searchInput = document.querySelector(".input")
const searchBtn = document.querySelector(".button")

searchInput.addEventListener("input", (event) => {
    searchValue = event.target.value
})
searchBtn.addEventListener("click",() => {
    console.log(searchValue);
    getData(searchValue)
})

// 엔터키 조회 기능 13
searchInput.addEventListener("keydown",(event) =>{
    if(event.keyCode ===13){
        getData(searchValue)
    }
})

// ------------------------------------------------------------------------------------------

async function getData(inputVaule) { 
    dataBoxEl.innerHTML="" // 이전 데이터 비워주고 재렌더링 효과
    // call unsplash api
    try {
        const res = await axios.get(`${API_URL}?query=${inputVaule}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`)
        console.log(res);

        res.data.results.forEach((item) => {
            dataBoxEl.innerHTML += `<swiper-slide>
                <div class="album">
                    <img src="${item.urls.full}" alt="" class="album_image">
                    <div class="album_infoBox">
                        <div class="album_infoBox_row">
                            <span class="label">이미지 크기</span>
                            <span class="value">${item.width} X ${item.height}</span>
                        </div>
                        <div class="album_infoBox_row">
                            <span class="label">업로드</span>
                            <span class="value">${dayjs(item.created_at).format("YYYY-MM-DD")}</span>
                        </div>
                        <div class="album_infoBox_row">
                            <span class="label">마지막 업데이트</span>
                            <span class="value">${dayjs(item.updated_at).format("YYYY-MM-DD")}</span>
                        </div>
                        <div class="album_infoBox_row">
                            <span class="label">좋아요</span>
                            <span class="value">${item.likes}</span>
                        </div>
                        <div class="album_infoBox_row">
                            <span class="label">작성자</span>
                            <span class="value">${item.user.name}</span>
                        </div>
                    </div>
                    </div>
            </swiper-slide>
            `
        })
    } catch (error) {
        console.log(error);
    }
}

getData("Korea")