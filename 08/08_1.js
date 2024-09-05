document.addEventListener('DOMContentLoaded', ()=>{
    //요소 가져오기
    const img = document.querySelector("#msg");
    const txt1 = document.querySelector('#number');
    const bt1 = document.querySelector('#bt');

    //랜덤수
    let n;
    //flag 변수
    let flag = false;

    bt1.addEventListener('click', (e)=>{
//        e.preventDefault; //form

        // if (flag == false) {
        if (!flag) {
            n = Math.floor(Math.random() * 100) +1; //1~100
            console.log(n);

            if (txt1.style.display == 'none') {
                txt1.style.display = 'inline'
                bt1.innerHTML = '확인'
                txt1.value = ''
                txt1.focus();
                img.setAttribute('src', '../img/what.png')
                return;
            }
            flag = true;
        }
        if (n === parseInt(txt1.value)) {
            img.setAttribute('src', '../img/good.png')
            txt1.style.display = 'none'
            bt1.innerHTML = '번호를 다시 입력하세요.'
            flag = false
        }
        else if (n > parseInt(txt1.value)) {   
            img.setAttribute('src', '../img/up.png')
            txt1.focus();
        }
        else if (n < parseInt(txt1.value)) {
            img.setAttribute('src', '../img/down.png')
            txt1.focus();
        }
        else {   
            txt1.focus();
        }
    })
})
