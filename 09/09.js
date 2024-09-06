document.addEventListener('DOMContentLoaded', ()=>{
   const txt1 = document.querySelector('#txt1')
   const txt2 = document.querySelector('#txt2')
   const bt1 = document.querySelector('#bt1')
   const bt2 = document.querySelector('#bt2')


   bt1.addEventListener('click', (e)=>{
    e.preventDefault();
    let s1 = txt1.value.replaceAll(' ', '') // 공백 ' '을 '' 전부 붙여버림
    let s2 = ''

    let s3 = null
    console.log(s3)

    // 반복문
    // for(let i = s1.length -1; i >=0; i--) {
    //     s2 = s2 + s1[i];
    // }

    s2 = s1.split('').reverse().join('')

    console.log('s1 =', s1)
    console.log('s1.split =', s1.split(''))
    console.log('s2 =', s2)

    if (s1 != s2) {
        txt2.value = "회문이 아닙니다."
    }
    else if (s1 == '') {
        txt2.value = "문자열을 입력하세요!"
    }
    else {
        txt2.value = "회문입니다."
    }
   })

   bt2.addEventListener('click', (e)=>{
    e.preventDefault();

    let total = 0;
    let cnt = 0;
    for (let c of txt1.value) {
   //     if (c != ' ' && !isNaN(c)) {
        if (c >= '0' && c <= '9') {
            console.log(c)
            total = total + parseInt(c)
            cnt++
        }
        if (cnt == 0) {
            txt2.value = "숫자가 존재하지 않습니다."
        }
        else {
            txt2.value = total
        }
    }


   })
})