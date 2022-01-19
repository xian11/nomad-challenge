// const clockTitle = document.querySelector(".js-clock");


// const christmas = new Date(2022,11,25,0,0,0);
// const today = new Date();
// const diff = christmas - today

// const resultMonth = diff.getMonth();
// const resultDate = getDate(diff);


// clockTitle.innerText = resultDate

// setInterval(resultDate,1000);

// //크리스마스 일로 변환 - 오늘 날짜 일로 변환?..

//https://dororongju.tistory.com/116

/*
정리
setInterval = 매번 호출해야하는 함수  like 시게
setTimeout(func, 몇ms인지) 뒤에 숫자만큼 지연돼서 함수 시작
*/

const h2 = document.querySelector("h2");

function getTime() {
    const christmas = new Date("2022-12-24:00:00:00");
    const today = new Date().getTime();
    const diff = christmas - today;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const daysStr = `${days < 10 ? `0${days}` : days}일`;
    const hoursStr = `${hours < 10 ? `0${hours}` : hours}시간`;
    const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}분 `;
    const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}초`;

    h2.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
}

function init() {
    setInterval(getTime, 1000);
   }
init();

//https://velog.io/@dltmdrbsla14/d-day-%EB%A7%8C%EB%93%A4%EA%B8%B0