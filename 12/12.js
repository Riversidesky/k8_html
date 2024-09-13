//전역변수
const testAPI = "82ca741a2844c5c180a208137bb92bd7"

//상세정보 가져오기
const getDetail = (movieCd) =>{
    const mvinfo = document.querySelector('#mvinfo')
    let url = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?`
    url = `${url}&key=${testAPI}&movieCd=${movieCd}` ;

    console.log(url)
        fetch(url) //요청
            .then(resp => resp.json())
            .then(data => {
      let movieInfo = data.movieInfoResult.movieInfo ;
      let genres = movieInfo.genres.map(item => item.genreNm).join(',') ;
      let companys = movieInfo.companys.map(item => 
                                            `${item.companyNm}(${item.companyPartNm})`)
                                       .join(',') ;
      let actors = movieInfo.actors.slice(0,3).map(item => item.peopleNm).join(',') ;
      console.log(genres)
      console.log(companys)

      mvinfo.innerHTML = `
        <div>${movieInfo.movieNm} (${movieInfo.openDt})</div>
        <ul>
          <li>장르 : ${genres}</li>
          <li>출연진 : ${actors}</li>
        </ul>
      ` ;
    })
    // fetch(url)
    //     .then(resp => resp.json())
    //     .then(data => {
    //         console.log(data.movieInfoResult.movieInfo)
    //         let movieInfo = data.movieInfoResult.movieInfo
    //         let genres = movieInfo.genres.map(item => item.genreNm.join(','))
    //         let companys = movie.Info.companys.map(item => item.companys.join(','))
    //         console.log(genres)
    //         console.log(companys)
    //     })
    
    // mvinfo.innerHTML = `<span>누적 관객 수 : ${movieCd}<span>
    //                     <span>${genres}<span>`
    .catch(err => console.log(err))
}







//open api 데이터 가져오기
const getData = (setDt, ul, cg) => {
    console.log(cg)
    let url = `	https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`
    url = `${url}key=${testAPI}&targetDt=${setDt}`

    if(cg != 'default') {
        url = `${url}&repNationCd=${cg}`;
    }

    console.log(url)

    fetch(url)
        .then(resp => resp.json()) // 갖고온 데이터를 json형식으로 바꿔주는
        .then(data => { //json형식으로 바꾼 값을 data에 넣음
            console.log(data)
            let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
            console.log(dailyBoxOfficeList)
            let tm = dailyBoxOfficeList.map(item => {
                console.log("item=", item)   
            return    `<a onClick="getDetail(${item.movieCd})">
                <li class='mvli'>
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
     
        
             
            }
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

//radio 값 가져오기
const getCg = () => {
    //radio 요소 가져오기
    const r1 = document.querySelector('#r1')
    const r2 = document.querySelector('#r2')
    const r3 = document.querySelector('#r3')

    console.log("r1=", r1.checked)
    console.log("r2=", r2.checked)
    console.log("r3=", r3.checked)

    if (r1.checked) return r1.value;
    else if (r2.checked) return r2.value;
    else if (r3.checked) return r3.value;

     // radio버튼의 클릭된 것만 가져오기
    // const cg = document.querySelector('input[name=mycg]:checked')
    // console.log('cg = ', cg.value);
    // return cg.value
}

document.addEventListener('DOMContentLoaded', () => {
    //어제 날짜 구하기
    let yesterday = getYesterday();
    console.log(yesterday)

    //요소 가져오기
    const dt = document.querySelector('#dt')
    const ul = document.querySelector('.sec > ul')
    // const rad = document.querySelectorAll('input[type=radio]')
    // const rad = document.getElementsByName('mycg')
    const rad = document.querySelectorAll('input[name=mycg]')
    
    
    //date 최대 요소값 설정
    dt.max = yesterday;

    //date 기본값
    dt.value = yesterday;

    //cg 값
    console.log(getCg());

    //기본 첫 페이지 보이기
    getData(dt.value.replaceAll('-', ''), ul, getCg())

    //데이터 가져오기
    dt.addEventListener('change', () => {
        getData(dt.value.replaceAll('-', ''), ul, getCg());
    })
    
    for(let r of rad) {
        r.addEventListener('click', () => {
           getData(dt.value.replaceAll('-', ''), ul, getCg());
        })
    }



})