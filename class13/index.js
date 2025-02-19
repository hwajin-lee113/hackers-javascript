const countDownBoxEl = document.querySelector(".container_countDownBox")
const targetDate = new Date('2025-12-31 00:00:00')

let endTime = new Date(targetDate). getTime() // getTime() 메서드는 표준시에 따라 지정된 날짜의 시간에 해당하는 숫자 값을 반환
let period = endTime - new Date().getTime() // 타깃날짜 - 오늘날짜 로 카운트다운의 기간을 설정

// 카운트다운 ui에 들어갈 데이터
const countdown = {
    days: "",
    hours: "",
    minutes: "",
    seconds: ""
  };

function countDown(){
    period = endTime - new Date().getTime() // 밀리세컨드를 반환

    // 정적 Math.floor() 메서드는 항상 반올림하여 주어진 숫자보다 작거나 같은 가장 큰 정수를 반환
    const daysValue = Math.floor(period / (1000 * 60 * 60 * 24))
    // 1000 = 초
    // 1000 / 60 = 분
    // 1000 / 60 / 60 = 시간
    // 1000 / 60 / 60 / 24 = 일
    const hoursValue = Math.floor((period % (1000 * 60 * 60 * 24)) /  (1000 * 60 * 60))
    const minutesValue = Math.floor((period % (1000 * 60 * 60)) /  (1000 * 60))
    const secondsValue = Math.floor((period % (1000 * 60)) /  (1000 ))

    days = daysValue
    hours = hoursValue
    minutes = minutesValue
    seconds = secondsValue
}

setInterval(() => {
    countDown()
    if (period <= 0) {
    countDownBoxEl.innerHTML = `
        <div class="container_countDownBox_countDown">
            <div class="layout">
                <span class="layout_text">카운트다운이 종료되었습니다!</span>
            </div>
    </div>`;
    return;
    }
    else {
    countDownBoxEl.innerHTML =  `
        <div class="container_countDownBox_countDown">
            <div class="layout">
                <span class="layout_text">마감</span>
                <div class="layout_time">${days}일</div>
                <div class="layout_time">${hours}시간</div>
                <div class="layout_time">${minutes}분</div>
                <div class="layout_time">${seconds}초</div>
                <span class="layout_text">전 이에요.</span>
            </div>
            <button class="button">이력서 열람하기</button>
        </div>`}
}, 1000) // 숫자 간격을 두고 반복해서 실행(1초마다)
