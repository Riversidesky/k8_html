document.addEventListener('DOMContentLoaded', ()=>{
    //요소 가져오기
    const img = document.querySelector("#msg");
    const txt1 = document.querySelector('#number');
    const bt1 = document.querySelector('#bt');

    //랜덤수
    let n;

    bt1.addEventListener('click', (e)=>{
        e.preventDefault; //form

        n = Math.floor(Math.random() * 100) +1; //1~100
        console.log(n);
        if (n === parseInt(txt1.value)) {
            img.setAttribute('src', `../img/good.png`)
        }
        else if (n > parseInt(txt1.value)) {   
            img.setAttribute('src', `../img/up.png`)
        }
        else {   
            img.setAttribute('src', `../img/down.png`)
        }
    })
})

//왜안되냐