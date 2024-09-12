//open api 데이터 가져오기
const getData = (setDt, ul, cg) => {
    console.log(cg)
    const testAPI = "82ca741a2844c5c180a208137bb92bd7"
    let url = `	http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`
    url = `${url}key=${testAPI}&targetDt=${setDt}`

    if(cg != 'default') {
        url = `${url}&repNationCd=${cg}`;
    }

    console.log(url)

    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
            console.log(dailyBoxOfficeList)
            let tm = dailyBoxOfficeList.map(item =>
                `<li class='mvli'>
                <span class='rank'>${item.rank}</span>
                <span class='movieNm'>${item.movieNm}</span>
                <span class='openDt'>${item.openDt}</span>
            <span class='rankInten'>
            ${item.rankInten > 0 ? 
                '<span class ="spRed">↑</span>' : item.rankInten < 0 ? 
                                    '<span class="spBlue">↓</span>' : '-'}
             ${item.rankInten != 0 ? Math.abs(item.rankInten) : ''}
                 </span>
                </li>`
     
          
        
                
            );

            
            tm = tm.join('')
            ul.innerHTML = tm;
        })
        .catch(err => console.log(err))
    
}


const getYesterday = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() -1)
    
    console.log(`${yesterday.getFullYear()}-${yesterday.getMonth()+1}-${yesterday.getDate()}`)

    const year = yesterday.getFullYear()
    let month = yesterday.getMonth()+1
    let day = yesterday.getDate();

    //월일 2자리
    month = month < 10 ? '0'+month : month
    day = day < 10 ? '0'+day : day

    //month = `0${month}`.slice(-2)
    
    // month = `${month}`.padStart(2, 0)
    
    console.log(month)
    
    return `${year}-${month}-${day}`;
}

document.addEventListener('DOMContentLoaded', () => {
    //어제 날짜 구하기
    let yesterday = getYesterday();
    console.log(yesterday)

    //요소 가져오기
    const dt = document.querySelector('#dt')
    const ul = document.querySelector('.sec > ul')
    const sel = document.querySelector('#ct')
    
    //date 최대 요소값 설정
    dt.max = yesterday;

    //date 기본값
    dt.value = yesterday;

    //기본 첫 페이지 보이기
    getData(dt.value.replaceAll('-', ''), ul, sel.value)

    //데이터 가져오기
    dt.addEventListener('change', () => {
        getData(dt.value.replaceAll('-', ''), ul, sel.value);
    })

    sel.addEventListener('change', () => {
        getData(dt.value.replaceAll('-', ''), ul, sel.value);
    })



})