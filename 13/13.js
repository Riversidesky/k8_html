let arr = [0, 0, 0, 0, 1, 0, 0, 0, 0]
let isSuffle = false;
let cnt = 0;


document.addEventListener("DOMContentLoaded", () => {
    const bt = document.querySelector('button')
    const boxs = document.querySelectorAll('.col')
    const txt = document.querySelector('.txt')

    for (let box of boxs) {
        box.addEventListener('click', () => {
            if (isSuffle == true) {

                let idx = box.getAttribute('id').slice(-1) - 1;
                //console.log(idx)
                if (arr[idx] == 0) {
                    box.innerHTML = `<img src="../img/hart.png">`
                    cnt++
                    arr[idx] = -1
                    console.log(arr, cnt)
                }
                if (arr[idx] == 1) {
                    box.innerHTML = `<img src="../img/boom.png">`
                    txt.innerHTML = "실패"
                    bt.innerHTML = "재시도"
                    isSuffle = false
                }

                if (cnt == 8) {
                    boxs[arr.indexOf(1)].innerHTML = `<img src="../img/hart.png">`
                    txt.innerHTML = "<h2>성공</h2>"
                    bt.innerHTML = "다시하기"
                    isSuffle = false
                }
            }
            else {
                txt.innerHTML="<h2>폭탄을 섞어주세요<h2>"
            }
            
        })
    }



    bt.addEventListener('click', () => {

        if (!isSuffle) {
            isSuffle = true;
            arr.sort(() => Math.random() - 0.5)
            txt.innerHTML = ""
        }

        for(let b of boxs) {
            bt.addEventListener('click', () => {
                b.innerHTML = `${b.getAttribute('id').slice(-1)}`
                bt.innerHTML = "폭탄 섞기"
                txt.innerHTML = ""
                cnt = 0
                arr = [0, 0, 0, 0, 1, 0, 0, 0, 0]
                arr.sort(() => Math.random() - 0.5)
            })
        }

        // for(i = 0; i < arr.length; i++) {
        //     if(arr[i] == 0) {
        //         box[i].innerHTML = `<img src="../img/hart.png">`
        //     } 
        //     else {
        //         box[i].innerHTML = `<img src="../img/boom.png">`
        // }
        // }

    })
})