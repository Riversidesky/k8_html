

document.addEventListener("DOMContentLoaded", ()=>{
    //요소 가져오기
    const divNum = document.querySelector('#divNum')
    const divplus = document.querySelector('.divplus')
    const divBonus = document.querySelector('#divBonus')
    const bt = document.querySelector('.sec > button')

    const disp = (d) => {
        divNum.style.display = d;
        divplus.style.display = d;
        divBonus.style.display = d;
    }
    

    //요소 숨기기
    // divNum.style.display = 'none';
    // divplus.style.display = 'none';
    // divBonus.style.display = 'none';
    disp('none');

    //버튼 클릭
    bt.addEventListener('click', (e)=>{
        e.preventDefault();

        let arr = [];
        while(arr.length < 7) {
            let n = Math.floor(Math.random()*45) +1; // 1~45
            if (!arr.includes(n) ) {
                arr.push(n);
            }
        } 
        let arrBonus = arr.splice(6, 1) 
        console.log(arr) 
        arr.sort((a,b) => {a-b})
        console.log(arrBonus)

        //왜안돼
        arr = arr.map(item => {
           return `<span class='sp${Math.floor(item / 10)}'>${item}</span>`
    })
        arr = arr.join('')
        divNum.innerHTML = arr;
        console.log(arr)

        arrBonus = arrBonus.map(item => 
            `<span class='sp${Math.floor(item / 10)}'>${item}</span>`
        )
        arrBonus = arrBonus.join('');
        divBonus.innerHTML = arrBonus;

//맞는코드
//     arr = arr.map( item => 
//         `<span class='sp${Math.floor(item/10)}'>${item}</span>`) ;
// arr = arr.join('');
// divNum.innerHTML = arr ;
// console.log(arr);

// arrBonus = arrBonus.map(item => 
//                 `<span class='sp${Math.floor(item/10)}'>${item}</span>`);
// arrBonus = arrBonus.join('');
// divBonus.innerHTML = arrBonus ;

        disp('block')
    })
})